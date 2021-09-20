import { useState, useEffect, useCallback } from 'react';
import { useAppDispatch, useAppSelector } from '@store/';
import {
  TickerSelector,
  tickerAllDataSelector,
  tickerListSelector,
} from '@store/modules/bithumb';
import { bithumbAsyncAction } from '@store/modules/bithumb/saga';

const useTickerAllData = () => {
  const dispatch = useAppDispatch();

  const [tickerDataLoading, tickerData, tickerDataError] = [
    useAppSelector(TickerSelector.loading),
    useAppSelector(TickerSelector.data),
    useAppSelector(TickerSelector.error),
  ];
  const tickerAllData = useAppSelector(tickerAllDataSelector);
  const tickerList = useAppSelector(tickerListSelector);

  const getTickerAll = useCallback(() => {
    dispatch(bithumbAsyncAction.getTickerAll.request());
  }, [dispatch]);

  return {
    getTickerAll,
    tickerDataLoading,
    tickerData,
    tickerDataError,
    tickerAllData,
    tickerList,
  };
};

export default useTickerAllData;
