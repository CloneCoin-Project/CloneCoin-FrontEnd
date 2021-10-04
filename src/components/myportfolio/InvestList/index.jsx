import * as S from '@components/myportfolio/style';

export const investColumns = [
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
        <span style={{ color: '#F75467' }}>{`+${fluctuationRate}`}</span>
      ) : (
        <span style={{ color: '#4386F9' }}>{fluctuationRate}</span>
      ),
  },
  {
    title: '매수 평균가',
    dataIndex: 'averagePurchasePrice',
    key: 'averagePurchasePrice',
    align: 'center',
    render: (averagePurchasePrice) =>
      Number(averagePurchasePrice)?.toLocaleString(),
  },
  {
    title: '보유량',
    dataIndex: 'reserve',
    key: 'reserve',
    align: 'center',
  },
];

const tempDataSource = [
  {
    key: 0,
    name: 'BTC',
    currentPrice: '10000000',
    fluctuationRate: 32.01,
    averagePurchasePrice: '10000000',
    reserve: '1.231',
  },
  {
    key: 4,
    name: 'BTC',
    currentPrice: '10000000',
    fluctuationRate: -32.01,
    averagePurchasePrice: '10000000',
    reserve: '2.3231',
  },
  {
    key: 1,
    name: 'XRP',
    currentPrice: '10000000',
    fluctuationRate: 2.01,
    averagePurchasePrice: '10000000',
    reserve: '2.3231',
  },
  {
    key: 2,
    name: 'ETH',
    currentPrice: '10000000',
    fluctuationRate: -32.01,
    averagePurchasePrice: '10000000',
    reserve: '2.3231',
  },
  {
    key: 3,
    name: 'ETC',
    currentPrice: '10000000',
    fluctuationRate: 3.01,
    averagePurchasePrice: '10000000',
    reserve: '2.3231',
  },
];

const InvestList = () => {
  return (
    <S.TableContainer>
      <S.Table
        columns={investColumns}
        dataSource={tempDataSource}
        pagination={false}
        scroll={{ x: true }}
      />
    </S.TableContainer>
  );
};

export default InvestList;
