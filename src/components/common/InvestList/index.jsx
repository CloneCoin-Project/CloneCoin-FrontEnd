import { useUserData, useInvestSocket } from '@hooks';
import { useLocation } from 'react-router';

import * as S from '@components/common/InvestList/style';
import {
  leaderInvestColumns,
  normalUserInvestColumns,
} from '@utils/investColumn';
import { STATUS_LEADER } from '@assets/string';

import { isPortFolio } from '@utils/portfolioUtil';

const InvestList = () => {
  const location = useLocation();
  const { pathname } = location;

  const { userStatus } = useUserData();
  const { currentInvestFilteredData } = useInvestSocket();

  return (
    <S.TableContainer>
      <S.Table
        columns={
          userStatus === STATUS_LEADER || !isPortFolio(pathname)
            ? leaderInvestColumns
            : normalUserInvestColumns
        }
        dataSource={currentInvestFilteredData}
        pagination={false}
        scroll={{ x: true }}
      />
    </S.TableContainer>
  );
};

export default InvestList;
