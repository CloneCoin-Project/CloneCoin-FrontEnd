import { useEffect, useState } from 'react';
import { useUserData, useWalletData } from '@hooks';

import YieldLineChart from '@components/myportfolio/LineChart';
import YiledPieChart from '@components/myportfolio/PieChart';
import InvestList from '@components/myportfolio/InvestList';

import * as S from '@components/myportfolio/style';
import { STATUS_LEADER } from '@assets/string';

const MyPortfolio = () => {
  const [period, setPeriod] = useState(1);
  const { userStatus, ID } = useUserData();
  const { getSelectedLeaderProfit } = useWalletData();

  useEffect(() => {
    if (userStatus === STATUS_LEADER) {
      getSelectedLeaderProfit({
        getSelectedLeaderProfitRequest: { leaderId: ID, period },
      });
    }
  }, [period]);

  return (
    <>
      <S.Divider orientation="left" style={{ margin: '2rem 0' }}>
        Portfolio
      </S.Divider>

      <S.PortfolioHeader>수익률</S.PortfolioHeader>
      <S.Row justify="end">
        <S.ButtonContainer>
          <S.NormalButton shape="round" onClick={() => setPeriod(1)}>
            1일
          </S.NormalButton>
          <S.NormalButton shape="round" onClick={() => setPeriod(7)}>
            7일
          </S.NormalButton>
          <S.NormalButton shape="round" onClick={() => setPeriod(30)}>
            30일
          </S.NormalButton>
        </S.ButtonContainer>
      </S.Row>
      {/* {userStatus === STATUS_LEADER ? (
        <LeaderLineChart />
      ) : (
        <NormalUserLineChart />
      )} */}
      <YieldLineChart />
      <S.PortfolioHeader>투자현황</S.PortfolioHeader>
      <YiledPieChart />
      <S.PortfolioHeader>투자 리스트</S.PortfolioHeader>
      <InvestList />
    </>
  );
};

export default MyPortfolio;
