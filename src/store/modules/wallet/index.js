import { createSlice, createSelector } from '@reduxjs/toolkit';
import { walletAsyncAction } from './saga';

export const WALLET = 'wallet';

const initialState = {
  leaderList: {
    loading: false,
    data: [],
    error: null,
  },
  selectedLeader: {
    loading: false,
    data: {
      leaderId: null,
      balance: null,
      coins: [],
    },
    error: null,
  }
};

const walletSlice = createSlice({
  name: WALLET,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(`${walletAsyncAction.getAllLeader.request}`, (state) => {
        state.leaderList.loading = true;
      })
      .addCase(`${walletAsyncAction.getAllLeader.success}`, (state, action) => {
        state.leaderList.loading = false;
        state.leaderList.data = action.payload.data;
      })
      .addCase(`${walletAsyncAction.getAllLeader.failure}`, (state) => {
        state.leaderList.loading = false;
        state.leaderList.data = initialState.leaderList.data;
      })
      .addCase(`${walletAsyncAction.getSelectedLeader.request}`, (state) => {
        state.selectedLeader.loading = true;
      })
      .addCase(`${walletAsyncAction.getSelectedLeader.success}`, (state, action) => {
        state.selectedLeader.loading = false;
        state.selectedLeader.data = action.payload.data;
      })
      .addCase(`${walletAsyncAction.getSelectedLeader.failure}`, (state) => {
        state.selectedLeader.loading = false;
        state.selectedLeader.data = initialState.selectedLeader.data;
      });
  },
});

const selfSelector = (state) => state[WALLET];

const leaderListSelector = createSelector(
  selfSelector,
  (state) => state.leaderList,
);

export const LeaderListSelector = {
  loading: createSelector(
    leaderListSelector,
    (leaderList) => leaderList.loading,
  ),
  data: createSelector(leaderListSelector, (leaderList) => leaderList.data),
  error: createSelector(leaderListSelector, (leaderList) => leaderList.error),
};

const selectedLeaderSelector = createSelector(
  selfSelector,
  (state) => state.selectedLeader,
);

export const SelectedLeaderSelector = {
  loading: createSelector(
    selectedLeaderSelector,
    (selectedLeader) => selectedLeader.loading,
  ),
  data: createSelector(selectedLeaderSelector, (selectedLeader) => selectedLeader.data),
  error: createSelector(selectedLeaderSelector, (selectedLeader) => selectedLeader.error),
};

export const walletAction = walletSlice.actions;
export const walletReducer = walletSlice.reducer;
