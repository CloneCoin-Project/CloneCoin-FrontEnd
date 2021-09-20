import { useState, useEffect, useMemo } from 'react';
import { useTickerAllData } from '@hooks';

const sendType = {
  type: 'ticker',
  symbols: [],
  tickTypes: ['MID'],
};

const JsonToString = (json) => JSON.stringify(json);
const ToJson = (string) => JSON.parse(string);

const socketUrl = 'wss://pubwss.bithumb.com/pub/ws';

const useTickerSocket = () => {
  const { tickerList, tickerAllData } = useTickerAllData();
  const [currentTickers, setCurrentTickers] = useState({});
  const [connectionCount, setConnectionCount] = useState(1);

  const ws = useMemo(() => new WebSocket(socketUrl), [connectionCount]);
  const readySocketState = useMemo(() => ws.readyState, [ws, ws.readyState]);

  useEffect(() => {
    if (Object.keys(tickerAllData).length < 1) return;
    setCurrentTickers(tickerAllData);
  }, [tickerAllData]);

  useEffect(() => {
    if (readySocketState === 1 && tickerList.length > 0) {
      ws.binaryType = 'arraybuffer';
      sendType.symbols = tickerList;
      ws.send(JsonToString(sendType));
    }
  }, [ws, readySocketState, tickerList]);

  ws.onmessage = (event) => {
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
          },
        });
      }
    }
  };
  ws.onclose = (event) => {
    console.log(event);
  };

  const connectionStart = () => {
    setConnectionCount(connectionCount+1);
  };

  const connectionClose = () => {
    ws.close();
  };

  return {
    currentTickers,
    connectionClose,
    connectionStart,
  };
};

export default useTickerSocket;
