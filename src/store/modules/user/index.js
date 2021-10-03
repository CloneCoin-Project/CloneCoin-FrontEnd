import { createSlice, createSelector } from '@reduxjs/toolkit';
import { userAsyncAction } from './saga';

export const USER = 'user';

const initialState = {
  loginStatus: {
    loading: false,
    data: {
      userId: '',
      userName: '',
      status: '',
      email: '',
    },
    error: null,
  },
};

const userSlice = createSlice({
  name: USER,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(`${userAsyncAction.signIn.request}`, (state) => {
        state.loginStatus.loading = true;
      })
      .addCase(`${userAsyncAction.signIn.success}`, (state, action) => {
        state.loginStatus.loading = false;
        state.loginStatus.data = action.payload.data;
      })
      .addCase(`${userAsyncAction.signIn.failure}`, (state, action) => {
        state.loginStatus.loading = false;
        state.loginStatus.data = initialState.loginStatus.data;
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

export const userAction = userSlice.actions;
export const userReducer = userSlice.reducer;
