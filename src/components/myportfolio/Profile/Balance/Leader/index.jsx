import { useWalletData } from '@hooks';
import { convertToFloorLocaleString } from '@utils/parse';

const LeaderBalance = () => {
  const {
    leaderBalance,
    leaderTotalBalance,
  } = useWalletData();

  return (
    <>
      <span>{`${convertToFloorLocaleString(leaderBalance)} 원`}</span>
      <span>{`${convertToFloorLocaleString(leaderTotalBalance)} 원`}</span>
    </>
  );
};

export default LeaderBalance;
