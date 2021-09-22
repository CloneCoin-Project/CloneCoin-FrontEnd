const getFluctuationRate = (prevCloseingPrice, currentPrice) => {
  return ((currentPrice - prevCloseingPrice) / prevCloseingPrice) * 100;
};

const compareNumbers = (a, b) => {
  // accTradeValue
  return b.accTradeValue - a.accTradeValue;
};

export const getTickerAllData = (data) => {
  let _tickerAllData = {};

  Object.entries(data).forEach(([key, value]) => {
    if (key === 'date') return;
    const {
      prev_closing_price: prevCloseingPrice,
      closing_price: currentPrice,
      acc_trade_value_24H: accTradeValue,
    } = value;
    _tickerAllData[`${key}_KRW`] = {
      prevCloseingPrice,
      currentPrice,
      fluctuationRate: getFluctuationRate(prevCloseingPrice, currentPrice)
        .toFixed(2)
        .toString(),
      accTradeValue,
    };
  });

  return _tickerAllData;
};

export const getTickerList = (data) => {
  const _tickerList = Object.keys(data)
    .map((key) => `${key}_KRW`)
    .filter((value) => value !== 'date_KRW');
  return _tickerList;
};

export const parseToDataSource = (currentTickers) => {
  const _dataSource = Object.entries(currentTickers).map(([key, value]) => {
    const { currentPrice, fluctuationRate, accTradeValue } = value;
    return {
      key,
      name: key,
      currentPrice,
      fluctuationRate,
      accTradeValue,
    };
  });
  const _sortedDataSource = _dataSource.sort(compareNumbers);
  return _sortedDataSource;
};

export const tickerColumns = [
  {
    title: '종목 (KRW)',
    dataIndex: 'name',
    key: 'name',
    align: 'center',
    render: (name) => name?.split('_')[0],
  },
  {
    title: '현재가격 (원)',
    dataIndex: 'currentPrice',
    key: 'currentPrice',
    align: 'center',
    render: (currentPrice, value) => {
      const { fluctuationRate } = value;
      const localePrice = Number(currentPrice)?.toLocaleString();

      return fluctuationRate >= 0 ? (
        <span style={{ color: '#F75467' }}>{localePrice}</span>
      ) : (
        <span style={{ color: '#4386F9' }}>{localePrice}</span>
      );
    },
  },
  {
    title: '변동률 (%)',
    dataIndex: 'fluctuationRate',
    key: 'fluctuationRate',
    align: 'center',
    render: (fluctuationRate) =>
      fluctuationRate >= 0 ? (
        <span style={{ color: '#F75467' }}>{`+${fluctuationRate}`}</span>
      ) : (
        <span style={{ color: '#4386F9' }}>{fluctuationRate}</span>
      ),
  },
];
