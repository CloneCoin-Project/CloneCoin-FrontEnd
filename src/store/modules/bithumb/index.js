import { createSlice, createSelector } from '@reduxjs/toolkit';

import { bithumbAsyncAction } from './saga';

export const BITHUMB = 'bithumb';

const initialState = {
  bithumb: {
    ticker: {
      loading: false,
      data: {
        tickerList: [],
        tickerAllData: {},
      },
      error: null,
    },
  },
};

const bithumbSlice = createSlice({
  name: BITHUMB,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(`${bithumbAsyncAction.getTickerAll.request}`, (state) => {
        state.bithumb.ticker.loading = true;
      })
      .addCase(
        `${bithumbAsyncAction.getTickerAll.success}`,
        (state, action) => {
          state.bithumb.ticker.data = action.payload.data;
        },
      )
      .addCase(
        `${bithumbAsyncAction.getTickerAll.failure}`,
        (state, action) => {
          state.bithumb = initialState.bithumb;
        },
      );
  },
});

const selfSelector = (state) => state[BITHUMB];

const bithumbSelector = createSelector(selfSelector, (state) => state.bithumb);

const tickerSelector = createSelector(
  bithumbSelector,
  (bithumb) => bithumb.ticker,
);

export const TickerSelector = {
  loading: createSelector(tickerSelector, (ticker) => ticker.loading),
  data: createSelector(tickerSelector, (ticker) => ticker.data),
  error: createSelector(tickerSelector, (ticker) => ticker.error),
};

export const tickerListSelector = createSelector(tickerSelector, (ticker) => ticker.data.tickerList);
export const tickerAllDataSelector = createSelector(tickerSelector, (ticker) => ticker.data.tickerAllData);

export const bithumbAction = bithumbSlice.actions;
export const bithumbReducer = bithumbSlice.reducer;
