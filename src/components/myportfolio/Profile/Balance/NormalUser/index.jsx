import { useEffect } from 'react';

import { useUserData, usePortfolioData } from '@hooks';
import { convertToFloorLocaleString } from '@utils/parse';

const NormalUserBalance = () => {
  const { ID } = useUserData();
  const { getMyportfolio, normalUserBalance, normalUserTotalBalance } = usePortfolioData();

  useEffect(() => {
    getMyportfolio({ getMyportfolioRequest: { userId: ID } });
  }, []);

  return (
    <>
      <span>{`${convertToFloorLocaleString(normalUserBalance)} 원`}</span>
      <span>{`${convertToFloorLocaleString(normalUserTotalBalance)} 원`}</span>
    </>
  );
};

export default NormalUserBalance;
