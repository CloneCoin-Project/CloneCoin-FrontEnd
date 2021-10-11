import { usePortfolioData } from '@hooks';
import { convertToFloorLocaleString } from '@utils/parse';

const NormalUserBalance = () => {
  const { normalUserBalance, normalUserTotalBalance } = usePortfolioData();
  const total = 10000000;
  return (
    <>
      <span>{`${convertToFloorLocaleString(normalUserBalance)} 원`}</span>
      <span>{`${convertToFloorLocaleString(total)} 원`}</span>
    </>
  );
};

export default NormalUserBalance;
