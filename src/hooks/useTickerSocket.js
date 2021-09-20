import { useState, useEffect } from 'react';
import { useTickerAllData } from '@hooks';
import { SocketClient, bithumbServices } from '@apis/socket';

import { JsonToString, ToJson } from '@utils/parse';

const useTickerSocket = () => {
  const { getTickerAll, tickerList, tickerAllData } = useTickerAllData();
  const [currentTickers, setCurrentTickers] = useState({});
  const [currentSocket, setCurrentSocket] = useState(null);

  useEffect(() => {
    getTickerAll();
  }, []);

  useEffect(() => {
    if (Object.keys(tickerAllData).length < 1) return;
    setCurrentTickers(tickerAllData);
  }, [tickerAllData]);

  useEffect(() => {
    if (tickerList.length < 1 || currentSocket) return;
    setCurrentSocket(
      SocketClient.publicInstance(SocketClient.path.bithumbPublicSocket),
    );
  }, [tickerList]);

  useEffect(() => {
    if (!currentSocket) return;

    currentSocket.onopen = () => {
      const sendType = bithumbServices.sendTickerType;
      sendType.symbols = tickerList;
      currentSocket.send(JsonToString(sendType));
    };

    currentSocket.onmessage = (event) => {
      const { data } = event;
      if (data) {
        const _target = ToJson(data)['content'];

        if (_target) {
          const { symbol, chgRate, closePrice } = _target;
          setCurrentTickers({
            ...currentTickers,
            [symbol]: {
              prevCloseingPrice: currentTickers[symbol]['prevCloseingPrice'],
              currentPrice: closePrice,
              fluctuationRate: chgRate,
              accTradeValue: currentTickers[symbol]['accTradeValue'],
            },
          });
        }
      }
    };

    currentSocket.onclose = (event) => {
      console.log('Socket Closed', event);
    };
  }, [currentSocket]);

  return {
    currentTickers,
  };
};

export default useTickerSocket;
