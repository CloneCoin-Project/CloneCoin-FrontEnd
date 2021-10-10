import { useState, useEffect } from 'react';
import { useLocation } from 'react-router';

import {
  useWalletData,
  useUserData,
  usePortfolioData,
  useTickerAllData,
} from '@hooks';

import { SocketClient, bithumbServices } from '@apis/socket';
import { STATUS_LEADER, STATUS_NORMAL } from '@assets/string';

import { JsonToString, ToJson, isObjectEmpty } from '@utils/parse';
import { isPortFolio } from '@utils/portfolioUtil';

const useInvestSocket = () => {
  const location = useLocation();
  const { pathname } = location;

  const { getTickerAll, tickerAllData } = useTickerAllData();
  const { userStatus } = useUserData();
  const { leaderCoins } = useWalletData();
  const { myCopyCoins } = usePortfolioData();

  const [currentSocket, setCurrentSocket] = useState(null);
  const [currentInvestList, setCurrentInvestList] = useState([]);
  const [currentInvestFilteredData, setCurrentInvestFilteredData] = useState(
    [],
  );

  useEffect(() => {
    getTickerAll();
  }, []);

  useEffect(() => {
    if (isObjectEmpty(tickerAllData)) return;
    if (userStatus === STATUS_LEADER || !isPortFolio(pathname)) {
      const coinFilteredData = leaderCoins.map((coin) => {
        const coinName = `${coin.coinName}_KRW`;
        const { currentPrice } = tickerAllData[coinName];
        return {
          ...coin,
          currentPrice,
          fluctuationRate:
            ((currentPrice - coin.avgPrice) / coin.avgPrice) * 100,
        };
      });

      const coinFilteredList = leaderCoins.map(
        (coin) => `${coin.coinName}_KRW`,
      );

      setCurrentInvestFilteredData(coinFilteredData);
      setCurrentInvestList(coinFilteredList);
    } else if (userStatus === STATUS_NORMAL) {
      const coinFilteredData = myCopyCoins.map((coin) => {
        const coinName = `${coin.name}_KRW`;
        const { currentPrice } = tickerAllData[coinName];
        return {
          ...coin,
          currentPrice,
          fluctuationRate:
            ((currentPrice - coin.avgPrice) / coin.avgPrice) * 100,
        };
      });

      const coinFilteredList = myCopyCoins.map((coin) => `${coin.name}_KRW`);

      setCurrentInvestFilteredData(coinFilteredData);
      setCurrentInvestList(coinFilteredList);
    }
  }, [pathname, userStatus, leaderCoins, myCopyCoins, tickerAllData]);

  useEffect(() => {
    return () => {
      if (currentSocket) {
        currentSocket.close();
        setCurrentSocket(null);
      }
    };
  }, [currentSocket]);

  useEffect(() => {
    if (currentInvestList.length < 1 || currentSocket) return;
    setCurrentSocket(
      SocketClient.publicInstance(SocketClient.path.bithumbPublicSocket),
    );
  }, [currentInvestList]);

  if (currentSocket) {
    currentSocket.onopen = () => {
      const sendType = bithumbServices.sendTickerType;
      sendType.symbols = currentInvestList;
      currentSocket.send(JsonToString(sendType));
    };

    currentSocket.onclose = (event) => {
      console.log('Invest List Socket Closed', event);
    };

    currentSocket.onmessage = (event) => {
      const { data } = event;
      if (data) {
        const _target = ToJson(data)['content'];

        if (_target) {
          const { symbol, closePrice } = _target;
          const splitSymbol = symbol?.split('_')[0];
          const index = currentInvestFilteredData.findIndex(
            (coin) => (coin.name || coin.coinName) === splitSymbol,
          );
          if (index !== -1) {
            const newCurrentInvestFilteredData = [...currentInvestFilteredData];
            newCurrentInvestFilteredData[index] = {
              ...newCurrentInvestFilteredData[index],
              currentPrice: closePrice,
              fluctuationRate:
                ((closePrice - newCurrentInvestFilteredData[index].avgPrice) /
                  newCurrentInvestFilteredData[index].avgPrice) *
                100,
            };
            setCurrentInvestFilteredData(newCurrentInvestFilteredData);
          }
        }
      }
    };
  }

  return { currentInvestFilteredData };
};

export default useInvestSocket;
