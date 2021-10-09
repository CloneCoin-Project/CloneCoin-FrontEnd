import { useCallback, useMemo } from 'react';

import { useAppSelector, useAppDispatch } from '@store';
import { portfolioAsyncAction } from '@store/modules/portfolio/saga';
import { MyPortfolioSelector } from '@store/modules/portfolio';

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

  const getMyportfolio = useCallback(
    (value) => {
      //getMyportfolioRequest {userId}
      dispatch(portfolioAsyncAction.getMyportfolio.request(value));
    },
    [dispatch],
  );

  const normalUserBalance = useMemo(
    () =>
      myPortfolioSelectorData?.balance ? myPortfolioSelectorData.balance : 0,
    [myPortfolioSelectorData, myPortfolioSelectorLoading],
  );

  const normalUserTotalBalance = useMemo(
    () =>
      myPortfolioSelectorData?.totalMoney
        ? myPortfolioSelectorData.totalMoney
        : myPortfolioSelectorData?.balance
        ? myPortfolioSelectorData?.balance
        : 0,
    [myPortfolioSelectorData, myPortfolioSelectorLoading],
  );

  return {
    getMyportfolio,
    myPortfolioSelectorLoading,
    myPortfolioSelectorData,
    myPortfolioSelectorError,
    normalUserBalance,
    normalUserTotalBalance,
  };
};

export default usePortfolioData;
