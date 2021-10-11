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

export const FETCH_MY_PORTFOLIO_PROFIT = `${PREFIX}/FETCH_MY_PORTFOLIO_PROFIT`;
export const FETCH_MY_PORTFOLIO_PROFIT_SUCCESS = `${PREFIX}/FETCH_MY_PORTFOLIO_PROFIT_SUCCESS`;
export const FETCH_MY_PORTFOLIO_PROFIT_FAILURE = `${PREFIX}/FETCH_MY_PORTFOLIO_PROFIT_FAILURE`;

export const getMyportfolioProfit = createAsyncAction(
  FETCH_MY_PORTFOLIO_PROFIT,
  FETCH_MY_PORTFOLIO_PROFIT_SUCCESS,
  FETCH_MY_PORTFOLIO_PROFIT_FAILURE,
)();

function* getMyportfolioProfitSaga(action) {
  try {
    const { getMyportfolioProfitRequest } = action.payload;
    const data = yield call(
      portfolioServices.fetchMyportfolioProfit,
      getMyportfolioProfitRequest,
    );

    yield put(
      getMyportfolioProfit.success({
        data,
      }),
    );
  } catch (e) {
    yield put(getMyportfolioProfit.failure());
  }
}

export const FETCH_MY_PORTFOLIO_RATIO = `${PREFIX}/FETCH_MY_PORTFOLIO_RATIO`;
export const FETCH_MY_PORTFOLIO_RATIO_SUCCESS = `${PREFIX}/FETCH_MY_PORTFOLIO_RATIO_SUCCESS`;
export const FETCH_MY_PORTFOLIO_RATIO_FAILURE = `${PREFIX}/FETCH_MY_PORTFOLIO_RATIO_FAILURE`;

export const getMyportfolioRatio = createAsyncAction(
  FETCH_MY_PORTFOLIO_RATIO,
  FETCH_MY_PORTFOLIO_RATIO_SUCCESS,
  FETCH_MY_PORTFOLIO_RATIO_FAILURE,
)();

function* getMyportfolioRatioSaga(action) {
  try {
    const { getMyportfolioRatioRequest } = action.payload;
    const data = yield call(
      portfolioServices.fetchMyportfolioRatio,
      getMyportfolioRatioRequest,
    );

    yield put(
      getMyportfolioRatio.success({
        data,
      }),
    );
  } catch (e) {
    yield put(getMyportfolioRatio.failure());
  }
}

export const FETCH_MY_COPY_COIN = `${PREFIX}/FETCH_MY_COPY_COIN`;
export const FETCH_MY_COPY_COIN_SUCCESS = `${PREFIX}/FETCH_MY_COPY_COIN_SUCCESS`;
export const FETCH_MY_COPY_COIN_FAILURE = `${PREFIX}/FETCH_MY_COPY_COIN_FAILURE`;

export const getMyCopyCoin = createAsyncAction(
  FETCH_MY_COPY_COIN,
  FETCH_MY_COPY_COIN_SUCCESS,
  FETCH_MY_COPY_COIN_FAILURE,
)();

function* getMyCopyCoinSaga(action) {
  try {
    const { getMyCopyCoinRequest } = action.payload;
    const myCopyCoinData = yield call(
      portfolioServices.fetchMyCopyCoin,
      getMyCopyCoinRequest,
    );

    yield put(
      getMyCopyCoin.success({
        myCopyCoinData,
      }),
    );
  } catch (e) {
    yield put(getMyCopyCoin.failure());
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
    const data = yield call(portfolioServices.StartCopy, copyRequest);
    yield put(startCopy.success({ data }));
    yield fork(onSuccess);
  } catch (e) {
    yield put(startCopy.failure());
    yield fork(onFailure);
  }
}

export const PUT_COPY = `${PREFIX}/PUT_COPY`;
export const PUT_COPY_SUCCESS = `${PREFIX}/PUT_COPY_SUCCESS`;
export const PUT_COPY_FAILURE = `${PREFIX}/PUT_COPY_FAILURE`;

export const changeCopy = createAsyncAction(
  PUT_COPY,
  PUT_COPY_SUCCESS,
  PUT_COPY_FAILURE,
)();

function* changeCopySaga(action) {
  const { changeCopyRequest, onSuccess, onFailure } = action.payload;

  try {
    const data = yield call(portfolioServices.ChangeCopy, changeCopyRequest);
    yield put(changeCopy.success({ data }));
    yield fork(onSuccess);
  } catch (e) {
    yield put(changeCopy.failure());
    yield fork(onFailure);
  }
}

export const FETCH_COPIED_AMOUNT = `${PREFIX}/FETCH_COPIED_AMOUNT`;
export const FETCH_COPIED_AMOUNT_SUCCESS = `${PREFIX}/FETCH_COPIED_AMOUNT_SUCCESS`;
export const FETCH_COPIED_AMOUNT_FAILURE = `${PREFIX}/FETCH_COPIED_AMOUNT_FAILURE`;

export const fetchCopiedAmount = createAsyncAction(
  FETCH_COPIED_AMOUNT,
  FETCH_COPIED_AMOUNT_SUCCESS,
  FETCH_COPIED_AMOUNT_FAILURE,
)();

function* fetchCopiedAmountSaga(action) {
  const { fetchCopiedAmountRequest } = action.payload;

  try {
    const data = yield call(
      portfolioServices.fetchCopiedAmount,
      fetchCopiedAmountRequest,
    );
    yield put(fetchCopiedAmount.success({ data }));
  } catch (e) {
    yield put(fetchCopiedAmount.failure());
  }
}

export const portfolioAsyncAction = {
  getMyportfolio,
  getMyportfolioProfit,
  getMyportfolioRatio,
  getMyCopyCoin,
  startCopy,
  changeCopy,
  fetchCopiedAmount,
};

export default function* portfolioSaga() {
  yield takeLatest(FETCH_MY_PORTFOLIO, getMyportfolioSaga);
  yield takeLatest(FETCH_MY_PORTFOLIO_PROFIT, getMyportfolioProfitSaga);
  yield takeLatest(FETCH_MY_PORTFOLIO_RATIO, getMyportfolioRatioSaga);
  yield takeLatest(FETCH_MY_COPY_COIN, getMyCopyCoinSaga);
  yield takeLatest(POST_COPY, startCopySaga);
  yield takeLatest(PUT_COPY, changeCopySaga);
  yield takeLatest(FETCH_COPIED_AMOUNT, fetchCopiedAmountSaga);
}
