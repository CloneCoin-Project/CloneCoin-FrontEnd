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
  userDescription: {
    loading: false,
    data: '',
    error: null,
  },
  // 리더일 경우에만 변경됨
  userFollower: {
    loading: false,
    data: [],
    error: null,
  },
  // 일반유저일 경우에만 변경됨
  userFollowing: {
	loading: false,
	data: [],
	error: null,
  },
  // 일반유저가 팔로우 요청할 때의 정보
  followLeader: {
    loading: false,
    error: null,
  },
  // 일반유저가 팔로우 취소할 때의 정보
  followDeleteLeader: {
    loading: false,
    error: null,
  }
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
      })
      .addCase(`${userAsyncAction.getDescription.request}`, (state) => {
        state.userDescription.loading = true;
      })
      .addCase(`${userAsyncAction.getDescription.success}`, (state, action) => {
        state.userDescription.loading = false;
        state.userDescription.data = action.payload.data;
      })
      .addCase(`${userAsyncAction.getDescription.failure}`, (state) => {
        state.userDescription.loading = false;
      })
      .addCase(`${userAsyncAction.postDescription.request}`, (state) => {
        state.userDescription.loading = true;
      })
      .addCase(`${userAsyncAction.postDescription.success}`, (state, action) => {
        state.userDescription.loading = false;
        state.userDescription.data = action.payload.data;
      })
      .addCase(`${userAsyncAction.postDescription.failure}`, (state) => {
        state.userDescription.loading = false;
      })
      .addCase(`${userAsyncAction.getMyFollower.request}`, (state) => {
        state.userFollower.loading = true;
      })
      .addCase(`${userAsyncAction.getMyFollower.success}`, (state, action) => {
        state.userFollower.loading = false;
        state.userFollower.data = action.payload.data;
      })
      .addCase(`${userAsyncAction.getMyFollower.failure}`, (state) => {
        state.userFollower.loading = false;
      })
      .addCase(`${userAsyncAction.getMyFollowing.request}`, (state) => {
        state.userFollowing.loading = true;
      })
      .addCase(`${userAsyncAction.getMyFollowing.success}`, (state, action) => {
        state.userFollowing.loading = false;
        state.userFollowing.data = action.payload.data;
      })
      .addCase(`${userAsyncAction.getMyFollowing.failure}`, (state) => {
        state.userFollowing.loading = false;
      })
      .addCase(`${userAsyncAction.startFollow.request}`, (state) => {
        state.followLeader.loading = true;
      })
      .addCase(`${userAsyncAction.startFollow.success}`, (state, action) => {
        state.followLeader.loading = false;
      })
      .addCase(`${userAsyncAction.startFollow.failure}`, (state) => {
        state.followLeader.loading = false;
      })
      .addCase(`${userAsyncAction.deleteFollow.request}`, (state) => {
        state.followDeleteLeader.loading = true;
      })
      .addCase(`${userAsyncAction.deleteFollow.success}`, (state, action) => {
        state.followDeleteLeader.loading = false;
      })
      .addCase(`${userAsyncAction.deleteFollow.failure}`, (state) => {
        state.followDeleteLeader.loading = false;
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

const userDescriptionSelector = createSelector(
  selfSelector,
  (state) => state.userDescription,
);

export const UserDescriptionSelector = {
  loading: createSelector(
    userDescriptionSelector,
    (userDescription) => userDescription.loading,
  ),
  data: createSelector(
    userDescriptionSelector,
    (userDescription) => userDescription.data,
  ),
  error: createSelector(
    userDescriptionSelector,
    (userDescription) => userDescription.error,
  ),
};

const userFollowerSelector = createSelector(
  selfSelector,
  (state) => state.userFollower,
);
  
export const UserFollowerSelector = {
  loading: createSelector(
    userFollowerSelector,
    (userFollower) => userFollower.loading,
  ),
  data: createSelector(
    userFollowerSelector,
    (userFollower) => userFollower.data,
  ),
  error: createSelector(
    userFollowerSelector,
    (userFollower) => userFollower.error,
  ),
};

const userFollowingSelector = createSelector(
  selfSelector,
  (state) => state.userFollowing,
);
	
export const UserFollowingSelector = {
  loading: createSelector(
	userFollowingSelector,
	(userFollowing) => userFollowing.loading,
  ),
  data: createSelector(
	userFollowingSelector,
	(userFollowing) => userFollowing.data,
  ),
  error: createSelector(
	userFollowingSelector,
	(userFollowing) => userFollowing.error,
  ),
};

const followLeaderSelector = createSelector(
  selfSelector,
  (state) => state.followLeader,
);

export const FollowLeaderSelector = {
  loading: createSelector(
    followLeaderSelector,
	(followLeader) => followLeader.loading,
  ),
  error: createSelector(
	followLeaderSelector,
	(followLeader) => followLeader.error,
  ),
};

const followDeleteLeaderSelector = createSelector(
  selfSelector,
  (state) => state.followDeleteLeader,
);
  
export const FollowDeleteLeaderSelector = {
  loading: createSelector(
    followDeleteLeaderSelector,
	(followDeleteLeader) => followDeleteLeader.loading,
  ),
  error: createSelector(
	followDeleteLeaderSelector,
    (followDeleteLeader) => followDeleteLeader.error,
  ),
};

export const userAction = userSlice.actions;
export const userReducer = userSlice.reducer;
