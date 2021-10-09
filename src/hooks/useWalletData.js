import { useCallback, useMemo } from 'react';
import { useLocation } from 'react-router';

import { useAppSelector, useAppDispatch } from '@store';
import { walletAsyncAction } from '@store/modules/wallet/saga';
import {
  LeaderListSelector,
  SelectedLeaderSelector,
  SelectedLeaderProfitSelector,
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

  const [
    selectedLeaderProfitLoading,
    selectedLeaderProfitData,
    selectedLeaderProfitError,
  ] = [
    useAppSelector(SelectedLeaderProfitSelector.loading),
    useAppSelector(SelectedLeaderProfitSelector.data),
    useAppSelector(SelectedLeaderProfitSelector.error),
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

  const getSelectedLeaderProfit = useCallback(
    (value) => {
      //getSelectedLeaderProfitRequest { leaderId, profit }
      dispatch(walletAsyncAction.getSelectedLeaderProfit.request(value));
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

  const chartProfit = useMemo(
    () =>
      selectedLeaderProfitData?.profits ? selectedLeaderProfitData.profits : [],
    [selectedLeaderProfitLoading, selectedLeaderProfitData],
  );

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
    getSelectedLeaderProfit,
    selectedLeaderProfitLoading,
    selectedLeaderProfitData,
    selectedLeaderProfitError,
    chartProfit,
  };
};

export default useWalletData;
