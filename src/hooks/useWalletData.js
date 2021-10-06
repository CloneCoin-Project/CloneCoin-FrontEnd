import { useCallback, useMemo } from 'react';
import { useLocation } from 'react-router';

import { useAppSelector, useAppDispatch } from '@store';
import { walletAsyncAction } from '@store/modules/wallet/saga';
import { LeaderListSelector } from '@store/modules/wallet';

const useWalletData = () => {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const { pathname } = location;

  const [LeaderListLoading, LeaderListData, LeaderListError] = [
    useAppSelector(LeaderListSelector.loading),
    useAppSelector(LeaderListSelector.data),
    useAppSelector(LeaderListSelector.error),
  ];

  const getAllLeader = useCallback(() => {
    dispatch(walletAsyncAction.getAllLeader.request());
  }, [dispatch]);

  const refinedLeaderList = useMemo(
    () => (pathname === '/home' ? LeaderListData.slice(0, 2) : LeaderListData),
    [pathname, LeaderListLoading],
  );

  return {
    getAllLeader,
    LeaderListLoading,
    LeaderListData,
    LeaderListError,
    refinedLeaderList,
  };
};

export default useWalletData;
