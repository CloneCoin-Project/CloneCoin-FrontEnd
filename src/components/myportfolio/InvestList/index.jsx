import { useWalletData, useUserData, usePortfolioData } from '@hooks';

import * as S from '@components/myportfolio/style';

import {
  leaderInvestColumns,
  normalUserInvestColumns,
} from '@utils/investColumn';
import { STATUS_LEADER, STATUS_NORMAL } from '@assets/string';

const InvestList = () => {
  const { userStatus } = useUserData();
  const { leaderCoins } = useWalletData();
  const { myCopyCoinSelectorData } = usePortfolioData();

  return (
    <S.TableContainer>
      <S.Table
        columns={
          userStatus === STATUS_LEADER
            ? leaderInvestColumns
            : normalUserInvestColumns
        }
        dataSource={userStatus === STATUS_LEADER ? leaderCoins : myCopyCoinSelectorData}
        pagination={false}
        scroll={{ x: true }}
      />
    </S.TableContainer>
  );
};

export default InvestList;
