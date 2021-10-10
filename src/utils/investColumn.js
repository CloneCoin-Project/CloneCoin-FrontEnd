import { convertToFixed } from '@utils/parse';

export const leaderInvestColumns = [
  {
    title: '종목 (KRW)',
    dataIndex: 'coinName',
    key: 'coinName',
    align: 'center',
    fixed: 'left',
    render: (coinName) => coinName?.split('_')[0],
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
    title: '수익률 (%)',
    dataIndex: 'fluctuationRate',
    key: 'fluctuationRate',
    align: 'center',
    render: (fluctuationRate) =>
      fluctuationRate >= 0 ? (
        <span style={{ color: '#F75467' }}>{`+${convertToFixed(
          fluctuationRate,
        )}`}</span>
      ) : (
        <span style={{ color: '#4386F9' }}>
          {convertToFixed(fluctuationRate)}
        </span>
      ),
  },
  {
    title: '매수 평균가',
    dataIndex: 'avgPrice',
    key: 'avgPrice',
    align: 'center',
    render: (avgPrice) => Number(avgPrice)?.toLocaleString(),
  },
  {
    title: '보유량',
    dataIndex: 'coinQuantity',
    key: 'coinQuantity',
    align: 'right',
    render: (coinQuantity) => convertToFixed(coinQuantity, 5),
  },
];

export const normalUserInvestColumns = [
  {
    title: '리더',
    dataIndex: 'leaderName',
    key: 'leaderName',
    align: 'center',
    fixed: 'left',
  },
  {
    title: '종목 (KRW)',
    dataIndex: 'name',
    key: 'name',
    align: 'center',
    fixed: 'left',
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
    title: '수익률 (%)',
    dataIndex: 'fluctuationRate',
    key: 'fluctuationRate',
    align: 'center',
    render: (fluctuationRate) =>
      fluctuationRate >= 0 ? (
        <span style={{ color: '#F75467' }}>{`+${convertToFixed(
          fluctuationRate,
        )}`}</span>
      ) : (
        <span style={{ color: '#4386F9' }}>
          {convertToFixed(fluctuationRate)}
        </span>
      ),
  },
  {
    title: '매수 평균가',
    dataIndex: 'avgPrice',
    key: 'avgPrice',
    align: 'center',
    render: (avgPrice) => Number(avgPrice)?.toLocaleString(),
  },
  {
    title: '보유량',
    dataIndex: 'coinQuantity',
    key: 'coinQuantity',
    align: 'right',
    render: (coinQuantity) => convertToFixed(coinQuantity, 5),
  },
];
