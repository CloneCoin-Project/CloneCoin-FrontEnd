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
  },
  myPortfolioProfit: {
    loading: false,
    data: {
      userId: null,
      profits: [],
    },
    error: null,
  },
  myPortfolioRatio: {
    loading: false,
    data: [],
    error: null,
  },
  myCopyCoin: {
    loading: false,
    data: [],
    error: null,
  },
  copyLeader: {
    loading: false,
    error: null,
  },
  copyChangeLeader: {
    loading: false,
    error: null,
  },
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
      .addCase(
        `${portfolioAsyncAction.getMyportfolio.success}`,
        (state, action) => {
          state.myPortfolio.loading = false;
          state.myPortfolio.data = action.payload.data;
        },
      )
      .addCase(`${portfolioAsyncAction.getMyportfolio.failure}`, (state) => {
        state.myPortfolio.loading = false;
        state.myPortfolio.data = initialState.myPortfolio.data;
      })
      .addCase(`${portfolioAsyncAction.getMyportfolioProfit.request}`, (state) => {
        state.myPortfolioProfit.loading = true;
      })
      .addCase(
        `${portfolioAsyncAction.getMyportfolioProfit.success}`,
        (state, action) => {
          state.myPortfolioProfit.loading = false;
          state.myPortfolioProfit.data = action.payload.data;
        },
      )
      .addCase(`${portfolioAsyncAction.getMyportfolioProfit.failure}`, (state) => {
        state.myPortfolioProfit.loading = false;
        state.myPortfolioProfit.data = initialState.myPortfolioProfit.data;
      })
      .addCase(`${portfolioAsyncAction.getMyportfolioRatio.request}`, (state) => {
        state.myPortfolioRatio.loading = true;
      })
      .addCase(
        `${portfolioAsyncAction.getMyportfolioRatio.success}`,
        (state, action) => {
          state.myPortfolioRatio.loading = false;
          state.myPortfolioRatio.data = action.payload.data;
        },
      )
      .addCase(`${portfolioAsyncAction.getMyportfolioRatio.failure}`, (state) => {
        state.myPortfolioRatio.loading = false;
        state.myPortfolioRatio.data = initialState.myPortfolioRatio.data;
      })
      .addCase(`${portfolioAsyncAction.getMyCopyCoin.request}`, (state) => {
        state.myCopyCoin.loading = true;
      })
      .addCase(
        `${portfolioAsyncAction.getMyCopyCoin.success}`,
        (state, action) => {
          state.myCopyCoin.loading = false;
          state.myCopyCoin.data = action.payload.myCopyCoinData;
        },
      )
      .addCase(`${portfolioAsyncAction.getMyCopyCoin.failure}`, (state) => {
        state.myCopyCoin.loading = false;
        state.myCopyCoin.data = initialState.myCopyCoin.data;
      })
      .addCase(`${portfolioAsyncAction.startCopy.request}`, (state) => {
        state.copyLeader.loading = true;
      })
      .addCase(`${portfolioAsyncAction.startCopy.success}`, (state, action) => {
        state.copyLeader.loading = false;
        state.myPortfolio.data.balance = action.payload.data.resultBalance;
      })
      .addCase(`${portfolioAsyncAction.startCopy.failure}`, (state) => {
        state.copyLeader.loading = false;
      })
      .addCase(`${portfolioAsyncAction.changeCopy.request}`, (state) => {
        state.copyChangeLeader.loading = true;
      })
      .addCase(`${portfolioAsyncAction.changeCopy.success}`, (state, action) => {
        state.copyChangeLeader.loading = false;
        state.myPortfolio.data.balance = action.payload.data.resultBalance;
      })
      .addCase(`${portfolioAsyncAction.changeCopy.failure}`, (state) => {
        state.copyChangeLeader.loading = false;
      })
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
  error: createSelector(
    myPortfolioSelector,
    (myPortfolio) => myPortfolio.error,
  ),
};

const myPortfolioProfitSelector = createSelector(
  selfSelector,
  (state) => state.myPortfolioProfit,
);

export const MyPortfolioProfitSelector = {
  loading: createSelector(
    myPortfolioProfitSelector,
    (myPortfolioProfit) => myPortfolioProfit.loading,
  ),
  data: createSelector(myPortfolioProfitSelector, (myPortfolioProfit) => myPortfolioProfit.data),
  error: createSelector(
    myPortfolioProfitSelector,
    (myPortfolioProfit) => myPortfolioProfit.error,
  ),
};

const myPortfolioRatioSelector = createSelector(
  selfSelector,
  (state) => state.myPortfolioRatio,
);

export const MyPortfolioRatioSelector = {
  loading: createSelector(
    myPortfolioRatioSelector,
    (myPortfolioRatio) => myPortfolioRatio.loading,
  ),
  data: createSelector(myPortfolioRatioSelector, (myPortfolioRatio) => myPortfolioRatio.data),
  error: createSelector(
    myPortfolioRatioSelector,
    (myPortfolioRatio) => myPortfolioRatio.error,
  ),
};

const myCopyCoinSelector = createSelector(
  selfSelector,
  (state) => state.myCopyCoin,
);
  
export const MyCopyCoinSelector = {
  loading: createSelector(
    myCopyCoinSelector,
    (myCopyCoin) => myCopyCoin.loading,
  ),
  data: createSelector(myCopyCoinSelector, (myCopyCoin) => myCopyCoin.data),
  error: createSelector(
    myCopyCoinSelector,
    (myCopyCoin) => myCopyCoin.error,
  ),
};

const copyLeaderSelector = createSelector(
  selfSelector,
  (state) => state.copyLeader,
);

export const CopyLeaderSelector = {
  loading: createSelector(
    copyLeaderSelector,
    (copyLeader) => copyLeader.loading,
  ),
  error: createSelector(copyLeaderSelector, (copyLeader) => copyLeader.error),
};

const copyChangeLeaderSelector = createSelector(
  selfSelector,
  (state) => state.copyChangeLeader,
);
  
export const ChangeCopyLeaderSelector = {
  loading: createSelector(
    copyChangeLeaderSelector,
    (copyChangeLeader) => copyChangeLeader.loading,
  ),
  error: createSelector(copyChangeLeaderSelector, (copyChangeLeader) => copyChangeLeader.error),
};

export const portfolioAction = portfolioSlice.actions;
export const portfolioReducer = portfolioSlice.reducer;
