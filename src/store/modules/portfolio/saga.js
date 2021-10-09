import { createAsyncAction } from 'typesafe-actions';

import { call, put, fork, takeLatest } from 'redux-saga/effects';
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

export const POST_COPY = `${PREFIX}/START_COPY`;
export const POST_COPY_SUCCESS = `${PREFIX}/START_COPY_SUCCESS`;
export const POST_COPY_FAILURE = `${PREFIX}/START_COPY_FAILURE`;

export const startCopy = createAsyncAction(
	POST_COPY,
	POST_COPY_SUCCESS,
	POST_COPY_FAILURE,
)();
  
function* startCopySaga(action) {
	const { copyRequest, onSuccess, onFailure } = action.payload;

	try {
		const data = yield call(
			portfolioServices.StartCopy,
			copyRequest,
		);
		yield put(startCopy.success({ data }));
		yield fork(onSuccess);
	} catch (e) {
		yield put(startCopy.failure());
		yield fork(onFailure);
	}
}

export const portfolioAsyncAction = {
  getMyportfolio,
  startCopy,
};

export default function* portfolioSaga() {
  yield takeLatest(FETCH_MY_PORTFOLIO, getMyportfolioSaga);
  yield takeLatest(POST_COPY, startCopySaga);
}
