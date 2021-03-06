import { createAsyncAction } from 'typesafe-actions';

import { call, put, fork, takeLatest } from 'redux-saga/effects';
import { userServices, portfolioServices } from '@apis/rest';
import { STATUS_NORMAL } from '@assets/string';
import {
  getMyportfolioRatio,
  getMyportfolio,
  getMyCopyCoin,
} from '../portfolio/saga';

export const PREFIX = 'user';

export const SIGN_IN = `${PREFIX}/SIGN_IN`;
export const SIGN_IN_SUCCESS = `${PREFIX}/SIGN_IN_SUCCESS`;
export const SIGN_IN_FAILURE = `${PREFIX}/SIGN_IN_FAILURE`;

export const signIn = createAsyncAction(
  SIGN_IN,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAILURE,
)();

function* signInSaga(action) {
  const { signInRequest, onSuccess, onFailure } = action.payload;

  try {
    const data = yield call(userServices.signIn, signInRequest);
    yield put(
      signIn.success({
        data,
      }),
    );

    const { ID, status } = data;
    if (status == STATUS_NORMAL) {
      const data = yield call(portfolioServices.fetchMyportfolio, {
        userId: ID,
      });
      yield put(
        getMyportfolio.success({
          data,
        }),
      );

      const myPortfolioRatioData = yield call(
        portfolioServices.fetchMyportfolioRatio,
        {
          userId: ID,
        },
      );
      yield put(
        getMyportfolioRatio.success({
          myPortfolioRatioData,
        }),
      );

      const myCopyCoinData = yield call(portfolioServices.fetchMyCopyCoin, {
        userId: ID,
      });

      yield put(
        getMyCopyCoin.success({
          myCopyCoinData,
        }),
      );
    }
    if (status == STATUS_NORMAL) {
      const data = yield call(userServices.fetchMyFollowing, {
        userId: ID,
      });
      yield put(
        getMyFollowing.success({
          data,
        }),
      );
    }
    yield fork(onSuccess);
  } catch (e) {
    yield put(signIn.failure());
    yield fork(onFailure);
  }
}

export const SIGN_UP = `${PREFIX}/SIGN_UP`;
export const SIGN_UP_SUCCESS = `${PREFIX}/SIGN_UP_SUCCESS`;
export const SIGN_UP_FAILURE = `${PREFIX}/SIGN_UP_FAILURE`;

export const signUp = createAsyncAction(
  SIGN_UP,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE,
)();

function* signUpSaga(action) {
  const { signUpRequest, onSuccess, onFailure } = action.payload;
  try {
    yield call(userServices.signUp, signUpRequest);
    yield put(signUp.success());
    yield fork(onSuccess);
  } catch (e) {
    yield put(signUp.failure());
    yield fork(onFailure);
  }
}

export const LEADER_REGISTER = `${PREFIX}/LEADER_REGISTER`;
export const LEADER_REGISTER_SUCCESS = `${PREFIX}/LEADER_REGISTER_SUCCESS`;
export const LEADER_REGISTER_FAILURE = `${PREFIX}/LEADER_REGISTER_FAILURE`;

export const leaderRegister = createAsyncAction(
  LEADER_REGISTER,
  LEADER_REGISTER_SUCCESS,
  LEADER_REGISTER_FAILURE,
)();

function* leaderRegisterSaga(action) {
  const { leaderRegisterRequest, onSuccess, onFailure } = action.payload;
  try {
    yield call(userServices.leaderRegister, leaderRegisterRequest);
    yield put(leaderRegister.success());
    yield fork(onSuccess);
  } catch (e) {
    yield put(leaderRegister.failure());
    yield fork(onFailure);
  }
}

export const FETCH_DESC = `${PREFIX}/FETCH_DESC`;
export const FETCH_DESC_SUCCESS = `${PREFIX}/FETCH_DESC_SUCCESS`;
export const FETCH_DESC_FAILURE = `${PREFIX}/FETCH_DESC_FAILURE`;

export const getDescription = createAsyncAction(
  FETCH_DESC,
  FETCH_DESC_SUCCESS,
  FETCH_DESC_FAILURE,
)();

function* getDescriptionSaga(action) {
  const { getDescriptionRequest } = action.payload;

  try {
    const data = yield call(userServices.getDescription, getDescriptionRequest);

    yield put(
      getDescription.success({
        data,
      }),
    );
  } catch (e) {
    yield put(getDescription.failure());
  }
}

export const POST_DESC = `${PREFIX}/POST_DESC`;
export const POST_DESC_SUCCESS = `${PREFIX}/POST_DESC_SUCCESS`;
export const POST_DESC_FAILURE = `${PREFIX}/POST_DESC_FAILURE`;

export const postDescription = createAsyncAction(
  POST_DESC,
  POST_DESC_SUCCESS,
  POST_DESC_FAILURE,
)();

function* postDescriptionSaga(action) {
  const { postDescriptionRequest, onSuccess, onFailure } = action.payload;

  try {
    const data = yield call(
      userServices.postDescription,
      postDescriptionRequest,
    );

    yield put(
      postDescription.success({
        data,
      }),
    );
    yield fork(onSuccess);
  } catch (e) {
    yield put(postDescription.failure());
    yield fork(onFailure);
  }
}

export const FETCH_MY_FOLLOWER = `${PREFIX}/FETCH_MY_FOLLOWER`;
export const FETCH_MY_FOLLOWER_SUCCESS = `${PREFIX}/FETCH_MY_FOLLOWER_SUCCESS`;
export const FETCH_MY_FOLLOWER_FAILURE = `${PREFIX}/FETCH_MY_FOLLOWER_FAILURE`;

export const getMyFollower = createAsyncAction(
  FETCH_MY_FOLLOWER,
  FETCH_MY_FOLLOWER_SUCCESS,
  FETCH_MY_FOLLOWER_FAILURE,
)();

function* getMyFollowerSaga(action) {
  const { getMyFollowerRequest } = action.payload;

  try {
    const data = yield call(userServices.fetchMyFollower, getMyFollowerRequest);

    yield put(getMyFollower.success({ data }));
  } catch (e) {
    yield put(getMyFollower.failure());
  }
}

export const FETCH_MY_FOLLOWING = `${PREFIX}/FETCH_MY_FOLLOWING`;
export const FETCH_MY_FOLLOWING_SUCCESS = `${PREFIX}/FETCH_MY_FOLLOWING_SUCCESS`;
export const FETCH_MY_FOLLOWING_FAILURE = `${PREFIX}/FETCH_MY_FOLLOWING_FAILURE`;

export const getMyFollowing = createAsyncAction(
  FETCH_MY_FOLLOWING,
  FETCH_MY_FOLLOWING_SUCCESS,
  FETCH_MY_FOLLOWING_FAILURE,
)();

function* getMyFollowingSaga(action) {
  const { getMyFollowingRequest } = action.payload;

  try {
    const data = yield call(
      userServices.fetchMyFollowing,
      getMyFollowingRequest,
    );
    yield put(getMyFollowing.success({ data }));
  } catch (e) {
    yield put(getMyFollowing.failure());
  }
}

export const POST_FOLLOW = `${PREFIX}/POST_FOLLOW`;
export const POST_FOLLOW_SUCCESS = `${PREFIX}/POST_FOLLOW_SUCCESS`;
export const POST_FOLLOW_FAILURE = `${PREFIX}/POST_FOLLOW_FAILURE`;

export const startFollow = createAsyncAction(
  POST_FOLLOW,
  POST_FOLLOW_SUCCESS,
  POST_FOLLOW_FAILURE,
)();

function* startFollowSaga(action) {
  const { followRequest, onSuccess, onFailure } = action.payload;

  try {
    const data = yield call(userServices.startFollow, followRequest);
    yield put(startFollow.success({ data }));

    const { userId } = followRequest;
    const myFollowingData = yield call(userServices.fetchMyFollowing, {
      userId,
    });
    yield put(
      getMyportfolio.success({
        myFollowingData,
      }),
    );

    yield fork(onSuccess);
  } catch (e) {
    yield put(startFollow.failure());
    yield fork(onFailure);
  }
}

export const DELETE_FOLLOW = `${PREFIX}/DELETE_FOLLOW`;
export const DELETE_FOLLOW_SUCCESS = `${PREFIX}/DELETE_FOLLOW_SUCCESS`;
export const DELETE_FOLLOW_FAILURE = `${PREFIX}/DELETE_FOLLOW_FAILURE`;

export const deleteFollow = createAsyncAction(
  DELETE_FOLLOW,
  DELETE_FOLLOW_SUCCESS,
  DELETE_FOLLOW_FAILURE,
)();

function* deleteFollowSaga(action) {
  const { followDeleteRequest, onSuccess, onFailure } = action.payload;

  try {
    const data = yield call(userServices.deleteFollow, followDeleteRequest);
    yield put(deleteFollow.success({ data }));

    const { userId } = followDeleteRequest;
    const myFollowingData = yield call(userServices.fetchMyFollowing, {
      userId,
    });
    yield put(
      getMyportfolio.success({
        myFollowingData,
      }),
    );

    yield fork(onSuccess);
  } catch (e) {
    yield put(deleteFollow.failure());
    yield fork(onFailure);
  }
}

export const userAsyncAction = {
  signIn,
  signUp,
  leaderRegister,
  getDescription,
  postDescription,
  getMyFollower,
  getMyFollowing,
  startFollow,
  deleteFollow,
};

export default function* userSaga() {
  yield takeLatest(SIGN_IN, signInSaga);
  yield takeLatest(SIGN_UP, signUpSaga);
  yield takeLatest(LEADER_REGISTER, leaderRegisterSaga);
  yield takeLatest(FETCH_DESC, getDescriptionSaga);
  yield takeLatest(POST_DESC, postDescriptionSaga);
  yield takeLatest(FETCH_MY_FOLLOWER, getMyFollowerSaga);
  yield takeLatest(FETCH_MY_FOLLOWING, getMyFollowingSaga);
  yield takeLatest(POST_FOLLOW, startFollowSaga);
  yield takeLatest(DELETE_FOLLOW, deleteFollowSaga);
}
