import { useEffect, useState } from 'react';
import { useWalletData } from '@hooks';
import { useLocation } from 'react-router';

import YieldLineChart from '@components/leaderportfolio/LineChart';
import Ring from '@components/leaderportfolio/PieChart';
import InvestList from '@/components/common/InvestList';

import * as S from '@components/leaderportfolio/Portfolio/style';

import {
  ONE_DAY,
  SEVEN_DAY,
  THIRTY_DAY,
  PROFILE_TAB_LEFT,
  EARNING_RATE,
  INVEST_STATUS,
  INVEST_LIST,
} from '@assets/string';

const LeaderPortfolio = () => {
  const location = useLocation();
  const { pathname } = location;

  const [period, setPeriod] = useState(1);
  const { getSelectedLeader, getSelectedLeaderProfit } = useWalletData();

  useEffect(() => {
    if (!pathname) return;
    const pathSplited = pathname.split('/');
    const leaderId = pathSplited[pathSplited.length - 1];
    getSelectedLeader({ getSelectedLeaderRequest: { leaderId } });
  }, [pathname]);

  useEffect(() => {
    if (!pathname) return;
    const pathSplited = pathname.split('/');
    const leaderId = pathSplited[pathSplited.length - 1];
    getSelectedLeaderProfit({
      getSelectedLeaderProfitRequest: { leaderId, period },
    });
  }, [period, pathname]);

  return (
    <>
      <S.Divider orientation="left" style={{ margin: '2rem 0' }}>
        {PROFILE_TAB_LEFT}
      </S.Divider>

      <S.PortfolioHeader>{EARNING_RATE}</S.PortfolioHeader>
      <S.Row justify="end">
        <S.ButtonContainer>
          <S.NormalButton
            shape="round"
            onClick={() => setPeriod(1)}
            children={ONE_DAY}
          />
          <S.NormalButton
            shape="round"
            onClick={() => setPeriod(7)}
            children={SEVEN_DAY}
          />
          <S.NormalButton
            shape="round"
            onClick={() => setPeriod(30)}
            children={THIRTY_DAY}
          />
        </S.ButtonContainer>
      </S.Row>
      <YieldLineChart />
      <S.PortfolioHeader>{INVEST_STATUS}</S.PortfolioHeader>
      <Ring />
      <S.PortfolioHeader>{INVEST_LIST}</S.PortfolioHeader>
      <InvestList />
    </>
  );
};

export default LeaderPortfolio;
