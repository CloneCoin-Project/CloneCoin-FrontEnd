import { useEffect } from 'react';

import { useUserData, useWalletData } from '@hooks';
import { convertToFloorLocaleString } from '@utils/parse';

const LeaderBalance = () => {
  const { ID } = useUserData();
  const {
    getSelectedLeader,
    selectedLeaderLoading,
    leaderBalance,
    leaderTotalBalance,
  } = useWalletData();

  useEffect(() => {
    getSelectedLeader({ getSelectedLeaderRequest: { leaderId: ID } });
  }, []);
  return (
    <>
      <span>{`${convertToFloorLocaleString(leaderBalance)} 원`}</span>
      <span>{`${convertToFloorLocaleString(leaderTotalBalance)} 원`}</span>
    </>
  );
};

export default LeaderBalance;
