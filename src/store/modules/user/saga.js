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
  try {
    const { data } = yield call(userServices.signIn, action.payload);

    yield put(
      signIn.success({
        data,
      }),
    );
  } catch (e) {
    yield put(signIn.failure());
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

export const userAsyncAction = {
  signIn,
  signUp,
};

export default function* userSaga() {
  yield takeLatest(SIGN_IN, signInSaga);
  yield takeLatest(SIGN_UP, signUpSaga);
}
