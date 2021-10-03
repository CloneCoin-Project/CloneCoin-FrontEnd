import { createAsyncAction } from 'typesafe-actions';

import { call, put, takeLatest } from 'redux-saga/effects';
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

export const userAsyncAction = {
  signIn,
};

export default function* userSaga() {
  yield takeLatest(SIGN_IN, signInSaga);
}
