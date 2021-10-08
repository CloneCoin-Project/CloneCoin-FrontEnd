import { useCallback, useMemo } from 'react';
import { useLocation } from 'react-router';

import { useAppSelector, useAppDispatch } from '@store';
import { walletAsyncAction } from '@store/modules/wallet/saga';
import {
  LeaderListSelector,
  SelectedLeaderSelector,
} from '@store/modules/wallet';

const useWalletData = () => {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const { pathname } = location;

  const [LeaderListLoading, LeaderListData, LeaderListError] = [
    useAppSelector(LeaderListSelector.loading),
    useAppSelector(LeaderListSelector.data),
    useAppSelector(LeaderListSelector.error),
  ];

  const [selectedLeaderLoading, selectedLeaderData, selectedLeaderError] = [
    useAppSelector(SelectedLeaderSelector.loading),
    useAppSelector(SelectedLeaderSelector.data),
    useAppSelector(SelectedLeaderSelector.error),
  ];

  const getAllLeader = useCallback(() => {
    dispatch(walletAsyncAction.getAllLeader.request());
  }, [dispatch]);

  const getSelectedLeader = useCallback(
    (value) => {
      //getSelectedLeaderRequest { leaderId }
      dispatch(walletAsyncAction.getSelectedLeader.request(value));
    },
    [dispatch],
  );

  const refinedLeaderList = useMemo(
    () => (pathname === '/home' ? LeaderListData.slice(0, 2) : LeaderListData),
    [pathname, LeaderListLoading],
  );

  const leaderBalance = useMemo(
    () => (selectedLeaderData?.balance ? selectedLeaderData.balance : 0),
    [selectedLeaderData, selectedLeaderLoading],
  );

  const leaderTotalBalance = useMemo(() => {
    if (selectedLeaderData?.coins?.length > 0) {
      return selectedLeaderData.coins.reduce(
        (acc, coin) => acc + coin.avgPrice * coin.coinQuantity,
        selectedLeaderData.balance,
      );
    } else return 0;
  }, [selectedLeaderData, selectedLeaderLoading]);

  return {
    getAllLeader,
    LeaderListLoading,
    LeaderListData,
    LeaderListError,
    refinedLeaderList,
    getSelectedLeader,
    selectedLeaderLoading,
    selectedLeaderData,
    selectedLeaderError,
    leaderBalance,
    leaderTotalBalance,
  };
};

export default useWalletData;
