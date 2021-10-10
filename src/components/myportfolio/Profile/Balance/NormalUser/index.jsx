import { usePortfolioData } from '@hooks';
import { convertToFloorLocaleString } from '@utils/parse';

const NormalUserBalance = () => {
  const { normalUserBalance, normalUserTotalBalance } = usePortfolioData();

  return (
    <>
      <span>{`${convertToFloorLocaleString(normalUserBalance)} 원`}</span>
      <span>{`${convertToFloorLocaleString(normalUserTotalBalance)} 원`}</span>
    </>
  );
};

export default NormalUserBalance;
