import YiledLineChart from '@/components/myportfolio/LineChart';
import YiledPieChart from '@/components/myportfolio/PieChart';
import InvestList from '@/components/myportfolio/InvestList';

import * as S from '@components/myportfolio/style';

const YieldList = () => {
  return (
    <>
      <S.Row justify="space-between">
        <S.Col xs={8} sm={4}>
          <S.YieldContainer>
            <S.YieldHeader>수익 Best</S.YieldHeader>
            <S.YieldContent>200.1%</S.YieldContent>
          </S.YieldContainer>
        </S.Col>
        <S.Col xs={8} sm={4}>
          <S.YieldContainer>
            <S.YieldHeader>수익 Worst</S.YieldHeader>
            <S.YieldContent>200.1%</S.YieldContent>
          </S.YieldContainer>
        </S.Col>
        <S.Col xs={8} sm={4}>
          <S.YieldContainer>
            <S.YieldHeader>24시간</S.YieldHeader>
            <S.YieldContent>200.1%</S.YieldContent>
          </S.YieldContainer>
        </S.Col>
        <S.Col xs={8} sm={4}>
          <S.YieldContainer>
            <S.YieldHeader>7일</S.YieldHeader>
            <S.YieldContent>200.1%</S.YieldContent>
          </S.YieldContainer>
        </S.Col>
        <S.Col xs={8} sm={4}>
          <S.YieldContainer>
            <S.YieldHeader>30일</S.YieldHeader>
            <S.YieldContent>200.1%</S.YieldContent>
          </S.YieldContainer>
        </S.Col>
        <S.Col xs={8} sm={4}>
          <S.YieldContainer>
            <S.YieldHeader>전체</S.YieldHeader>
            <S.YieldContent>200.1%</S.YieldContent>
          </S.YieldContainer>
        </S.Col>
      </S.Row>
    </>
  );
};

const LeaderPortfolio = () => {
  return (
    <>
      <S.Divider orientation="left" style={{margin: "2rem 0"}}>Portfolio</S.Divider>
      <S.PortfolioHeader>수익률</S.PortfolioHeader>
      <YieldList />
      <YiledLineChart />
      <S.PortfolioHeader>투자현황</S.PortfolioHeader>
      <YiledPieChart />
      <S.PortfolioHeader>투자 리스트</S.PortfolioHeader>
      <InvestList />
    </>
  );
};

export default LeaderPortfolio;
