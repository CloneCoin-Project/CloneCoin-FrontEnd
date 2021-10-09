import { useEffect, useState } from 'react';
import { useUserData, useWalletData, usePortfolioData } from '@hooks';

import YieldLineChart from '@components/myportfolio/LineChart';
import InvestList from '@components/myportfolio/InvestList';
import * as S from '@components/myportfolio/style';
import { Ring } from '@components/common/Chart';

import {
  STATUS_LEADER,
  STATUS_NORMAL,
  ONE_DAY,
  SEVEN_DAY,
  THIRTY_DAY,
  PROFILE_TAB_LEFT,
  EARNING_RATE,
  INVEST_STATUS,
  INVEST_LIST,
} from '@assets/string';

const MyPortfolio = () => {
  const [period, setPeriod] = useState(1);
  const { userStatus, ID } = useUserData();
  const { getSelectedLeader, getSelectedLeaderProfit } = useWalletData();
  const { getMyportfolioProfit, getMyportfolioRatio } = usePortfolioData();

  useEffect(() => {
    if (userStatus === STATUS_LEADER) {
      getSelectedLeader({ getSelectedLeaderRequest: { leaderId: ID } });
    } else if (userStatus === STATUS_NORMAL) {
      getMyportfolioRatio({
        getMyportfolioRatioRequest: { userId: ID },
      });
    }
  }, []);

  useEffect(() => {
    if (userStatus === STATUS_LEADER) {
      getSelectedLeaderProfit({
        getSelectedLeaderProfitRequest: { leaderId: ID, period },
      });
    } else if (userStatus === STATUS_NORMAL) {
      getMyportfolioProfit({
        getMyportfolioProfitRequest: { userId: ID, period },
      });
    }
  }, [period]);

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

export default MyPortfolio;
