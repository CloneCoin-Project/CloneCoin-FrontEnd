import { createAsyncAction } from 'typesafe-actions';

import { call, put, fork, takeLatest } from 'redux-saga/effects';
import { userServices } from '@apis/rest';

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

export const userAsyncAction = {
  signIn,
  signUp,
  leaderRegister,
  getDescription,
};

export default function* userSaga() {
  yield takeLatest(SIGN_IN, signInSaga);
  yield takeLatest(SIGN_UP, signUpSaga);
  yield takeLatest(LEADER_REGISTER, leaderRegisterSaga);
  yield takeLatest(FETCH_DESC, getDescriptionSaga);
}
