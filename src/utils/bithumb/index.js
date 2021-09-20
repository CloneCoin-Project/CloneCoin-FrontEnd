const getFluctuationRate = (prevCloseingPrice, currentPrice) => {
  return ((currentPrice - prevCloseingPrice) / prevCloseingPrice) * 100;
};

export const getTickerAllData = (data) => {
  let _tickerAllData = {};

  Object.entries(data).forEach(([key, value]) => {
    const {
      prev_closing_price: prevCloseingPrice,
      closing_price: currentPrice,
    } = value;
    _tickerAllData[`${key}_KRW`] = {
      prevCloseingPrice,
      currentPrice,
      fluctuationRate: getFluctuationRate(prevCloseingPrice, currentPrice)
        .toFixed(2)
        .toString(),
    };
  });

  return _tickerAllData;
};

export const getTickerList = (data) => {
  const _tickerList = Object.keys(data).map((key) => `${key}_KRW`);
  return _tickerList;
};

export const parseToDataSource = (currentTickers) => {
  return Object.entries(currentTickers).map(([key, value]) => {
    const { currentPrice, fluctuationRate } = value;
    return {
      key,
      name: key,
      currentPrice,
      fluctuationRate,
    };
  });
};
