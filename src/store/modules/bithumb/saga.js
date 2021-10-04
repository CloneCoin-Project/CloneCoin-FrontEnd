import { createAsyncAction } from 'typesafe-actions';

import { call, put, takeLatest } from 'redux-saga/effects';
import { bithumbServices } from '@apis/rest';
import { getTickerAllData, getTickerList } from '@utils/bithumb';

export const PREFIX = 'bithumb';

export const GET_TICKER_ALL = `${PREFIX}/GET_TICKER_ALL`;
export const GET_TICKER_ALL_SUCCESS = `${PREFIX}/GET_TICKER_ALL_SUCCESS`;
export const GET_TICKER_ALL_FAILURE = `${PREFIX}/GET_TICKER_ALL_FAILURE`;

export const getTickerAll = createAsyncAction(
  GET_TICKER_ALL,
  GET_TICKER_ALL_SUCCESS,
  GET_TICKER_ALL_FAILURE,
)();

function* getTickerAllSaga() {
  try {
    const { data } = yield call(bithumbServices.fetchTickerAll);

    const _tickerList = getTickerList(data);
    const _tickerAllData = getTickerAllData(data);

    yield put(
      getTickerAll.success({
        data: { tickerList: _tickerList, tickerAllData: _tickerAllData },
      }),
    );
  } catch (e) {
    yield put(getTickerAll.failure());
  }
}

export const bithumbAsyncAction = {
  getTickerAll,
};

export default function* bithumbSaga() {
  yield takeLatest(GET_TICKER_ALL, getTickerAllSaga);
}
