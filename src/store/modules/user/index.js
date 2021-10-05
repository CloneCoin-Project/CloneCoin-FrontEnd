import { createSlice, createSelector } from '@reduxjs/toolkit';
import { userAsyncAction } from './saga';

export const USER = 'user';

const initialState = {
  loginStatus: {
    loading: false,
    data: {
      ID: '',
      userId: '',
      userName: '',
      status: '',
      email: '',
    },
    error: null,
  },
  leaderRegister: {
    loading: false,
    error: null,
  },
};

const userSlice = createSlice({
  name: USER,
  initialState,
  reducers: {
    logout(state) {
      state.loginStatus = initialState.loginStatus;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(`${userAsyncAction.signIn.request}`, (state) => {
        state.loginStatus.loading = true;
      })
      .addCase(`${userAsyncAction.signIn.success}`, (state, action) => {
        state.loginStatus.loading = false;
        state.loginStatus.data = action.payload.data;
      })
      .addCase(`${userAsyncAction.signIn.failure}`, (state) => {
        state.loginStatus.loading = false;
        state.loginStatus.data = initialState.loginStatus.data;
      })
      .addCase(`${userAsyncAction.leaderRegister.request}`, (state) => {
        state.leaderRegister.loading = true;
      })
      .addCase(`${userAsyncAction.leaderRegister.success}`, (state) => {
        state.leaderRegister.loading = false;
        state.loginStatus.data.status = 'leader';
      })
      .addCase(`${userAsyncAction.leaderRegister.failure}`, (state) => {
        state.leaderRegister.loading = false;
      });
  },
});

const selfSelector = (state) => state[USER];

const loginStatusSelector = createSelector(
  selfSelector,
  (state) => state.loginStatus,
);

export const LoginStatusSelector = {
  loading: createSelector(
    loginStatusSelector,
    (loginStatus) => loginStatus.loading,
  ),
  data: createSelector(loginStatusSelector, (loginStatus) => loginStatus.data),
  error: createSelector(
    loginStatusSelector,
    (loginStatus) => loginStatus.error,
  ),
};

const leaderRegisterSelector = createSelector(
  selfSelector,
  (state) => state.leaderRegister,
);

export const LeaderRegisterSelector = {
  loading: createSelector(
    leaderRegisterSelector,
    (leaderRegister) => leaderRegister.loading,
  ),
  error: createSelector(
    leaderRegisterSelector,
    (leaderRegister) => leaderRegister.error,
  ),
};

export const userAction = userSlice.actions;
export const userReducer = userSlice.reducer;
