import { createAsyncAction } from 'typesafe-actions';

import { call, put, takeLatest } from 'redux-saga/effects';
import { portfolioServices } from '@apis/rest';

export const PREFIX = 'portfolio';

export const FETCH_MY_PORTFOLIO = `${PREFIX}/FETCH_MY_PORTFOLIO`;
export const FETCH_MY_PORTFOLIO_SUCCESS = `${PREFIX}/FETCH_MY_PORTFOLIO_SUCCESS`;
export const FETCH_MY_PORTFOLIO_FAILURE = `${PREFIX}/FETCH_MY_PORTFOLIO_FAILURE`;

export const getMyportfolio = createAsyncAction(
  FETCH_MY_PORTFOLIO,
  FETCH_MY_PORTFOLIO_SUCCESS,
  FETCH_MY_PORTFOLIO_FAILURE,
)();

function* getMyportfolioSaga(action) {
  try {
    const { getMyportfolioRequest } = action.payload;
    const data = yield call(
      portfolioServices.fetchMyportfolio,
      getMyportfolioRequest,
    );

    yield put(
      getMyportfolio.success({
        data,
      }),
    );
  } catch (e) {
    yield put(getMyportfolio.failure());
  }
}

export const portfolioAsyncAction = {
  getMyportfolio,
};

export default function* portfolioSaga() {
  yield takeLatest(FETCH_MY_PORTFOLIO, getMyportfolioSaga);
}
