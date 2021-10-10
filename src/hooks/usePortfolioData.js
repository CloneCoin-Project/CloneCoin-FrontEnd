import { useCallback, useMemo } from 'react';

import { useAppSelector, useAppDispatch } from '@store';
import { portfolioAsyncAction } from '@store/modules/portfolio/saga';
import {
  MyPortfolioSelector,
  MyPortfolioProfitSelector,
  MyPortfolioRatioSelector,
  CopyLeaderSelector,
  MyCopyCoinSelector,
} from '@store/modules/portfolio';

const usePortfolioData = () => {
  const dispatch = useAppDispatch();

  const [
    myPortfolioSelectorLoading,
    myPortfolioSelectorData,
    myPortfolioSelectorError,
  ] = [
    useAppSelector(MyPortfolioSelector.loading),
    useAppSelector(MyPortfolioSelector.data),
    useAppSelector(MyPortfolioSelector.error),
  ];

  const [
    myPortfolioProfitSelectorLoading,
    myPortfolioProfitSelectorData,
    myPortfolioProfitSelectorError,
  ] = [
    useAppSelector(MyPortfolioProfitSelector.loading),
    useAppSelector(MyPortfolioProfitSelector.data),
    useAppSelector(MyPortfolioProfitSelector.error),
  ];

  const [
    myPortfolioRatioSelectorLoading,
    myPortfolioRatioSelectorData,
    myPortfolioRatioSelectorError,
  ] = [
    useAppSelector(MyPortfolioRatioSelector.loading),
    useAppSelector(MyPortfolioRatioSelector.data),
    useAppSelector(MyPortfolioRatioSelector.error),
  ];

  const [copyLeaderSelectorLoading, copyLeaderSelectorError] = [
    useAppSelector(CopyLeaderSelector.loading),
    useAppSelector(CopyLeaderSelector.error),
  ];

  const [
    myCopyCoinSelectorLoading,
    myCopyCoinSelectorData,
    myCopyCoinSelectorError,
  ] = [
    useAppSelector(MyCopyCoinSelector.loading),
    useAppSelector(MyCopyCoinSelector.data),
    useAppSelector(MyCopyCoinSelector.error),
  ];

  const getMyportfolio = useCallback(
    (value) => {
      dispatch(portfolioAsyncAction.getMyportfolio.request(value));
    },
    [dispatch],
  );

  const getMyportfolioProfit = useCallback(
    (value) => {
      // getMyportfolioProfitRequest {userId, period}
      dispatch(portfolioAsyncAction.getMyportfolioProfit.request(value));
    },
    [dispatch],
  );

  const getMyportfolioRatio = useCallback(
    (value) => {
      // getMyportfolioRatioRequest {userId}
      dispatch(portfolioAsyncAction.getMyportfolioRatio.request(value));
    },
    [dispatch],
  );

  const startCopy = useCallback(
    (value) => {
      dispatch(portfolioAsyncAction.startCopy.request(value));
    },
    [dispatch],
  );

  const getMyCopyCoin = useCallback(
    (value) => {
      // getMyCopyCoinRequest { userId }
      dispatch(portfolioAsyncAction.getMyCopyCoin.request(value));
    },
    [dispatch],
  );

  const normalUserBalance = useMemo(
    () =>
      myPortfolioSelectorData?.balance ? myPortfolioSelectorData.balance : 0,
    [myPortfolioSelectorData, myPortfolioSelectorLoading],
  );

  const normalUserTotalBalance = useMemo(() => {
    if (myCopyCoinSelectorData?.length > 0) {
      return myCopyCoinSelectorData.reduce(
        (acc, coin) => acc + coin.avgPrice * coin.coinQuantity,
        myPortfolioSelectorData.balance,
      );
    } else
      return myPortfolioSelectorData?.balance
        ? myPortfolioSelectorData.balance
        : 0;
  }, [
    myPortfolioSelectorData,
    myPortfolioSelectorLoading,
    myCopyCoinSelectorData,
    myCopyCoinSelectorLoading,
  ]);

  const myCopyCoins = useMemo(
    () => (myCopyCoinSelectorData ? myCopyCoinSelectorData : []),
    [myCopyCoinSelectorData, myCopyCoinSelectorLoading],
  );

  const chartNormalUserProfit = useMemo(
    () =>
      myPortfolioProfitSelectorData?.profits
        ? myPortfolioProfitSelectorData.profits
        : [],
    [myPortfolioProfitSelectorLoading, myPortfolioProfitSelectorData],
  );

  return {
    getMyportfolio,
    getMyportfolioProfit,
    getMyportfolioRatio,
    startCopy,
    myPortfolioSelectorLoading,
    myPortfolioSelectorData,
    myPortfolioSelectorError,
    myPortfolioProfitSelectorLoading,
    myPortfolioProfitSelectorData,
    myPortfolioProfitSelectorError,
    copyLeaderSelectorLoading,
    copyLeaderSelectorError,
    normalUserBalance,
    normalUserTotalBalance,
    chartNormalUserProfit,
    myPortfolioRatioSelectorLoading,
    myPortfolioRatioSelectorData,
    myPortfolioRatioSelectorError,
    myCopyCoinSelectorLoading,
    myCopyCoinSelectorData,
    myCopyCoinSelectorError,
    getMyCopyCoin,
    myCopyCoins,
  };
};

export default usePortfolioData;
