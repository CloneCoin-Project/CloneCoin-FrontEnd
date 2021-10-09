import { createSlice, createSelector } from '@reduxjs/toolkit';
import { portfolioAsyncAction } from './saga';

export const PORTFOLIO = 'portfolio';

const initialState = {
  myPortfolio: {
    loading: false,
    data: {
      leaders: [],
      balance: null,
    },
    error: null,
  }
};

const portfolioSlice = createSlice({
  name: PORTFOLIO,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(`${portfolioAsyncAction.getMyportfolio.request}`, (state) => {
        state.myPortfolio.loading = true;
      })
      .addCase(`${portfolioAsyncAction.getMyportfolio.success}`, (state, action) => {
        state.myPortfolio.loading = false;
        state.myPortfolio.data = action.payload.data;
      })
      .addCase(`${portfolioAsyncAction.getMyportfolio.failure}`, (state) => {
        state.myPortfolio.loading = false;
        state.myPortfolio.data = initialState.myPortfolio.data;
      });
  },
});

const selfSelector = (state) => state[PORTFOLIO];

const myPortfolioSelector = createSelector(
  selfSelector,
  (state) => state.myPortfolio,
);

export const MyPortfolioSelector = {
  loading: createSelector(
    myPortfolioSelector,
    (myPortfolio) => myPortfolio.loading,
  ),
  data: createSelector(myPortfolioSelector, (myPortfolio) => myPortfolio.data),
  error: createSelector(myPortfolioSelector, (myPortfolio) => myPortfolio.error),
};

export const portfolioAction = portfolioSlice.actions;
export const portfolioReducer = portfolioSlice.reducer;
