import { createAsyncAction } from 'typesafe-actions';

import { call, put, takeLatest } from 'redux-saga/effects';
import { walletServices } from '@apis/rest';

export const PREFIX = 'wallet';

export const FETCH_ALL_LEADER = `${PREFIX}/FETCH_ALL_LEADER`;
export const FETCH_ALL_LEADER_SUCCESS = `${PREFIX}/FETCH_ALL_LEADER_SUCCESS`;
export const FETCH_ALL_LEADER_FAILURE = `${PREFIX}/FETCH_ALL_LEADER_FAILURE`;

export const getAllLeader = createAsyncAction(
  FETCH_ALL_LEADER,
  FETCH_ALL_LEADER_SUCCESS,
  FETCH_ALL_LEADER_FAILURE,
)();

function* getAllLeaderSaga() {
  try {
    const data = yield call(walletServices.fetchAllLeader);

    yield put(
      getAllLeader.success({
        data,
      }),
    );
  } catch (e) {
    yield put(getAllLeader.failure());
  }
}

export const FETCH_SELECTED_LEADER = `${PREFIX}/FETCH_SELECTED_LEADER`;
export const FETCH_SELECTED_LEADER_SUCCESS = `${PREFIX}/FETCH_SELECTED_LEADER_SUCCESS`;
export const FETCH_SELECTED_LEADER_FAILURE = `${PREFIX}/FETCH_SELECTED_LEADER_FAILURE`;

export const getSelectedLeader = createAsyncAction(
  FETCH_SELECTED_LEADER,
  FETCH_SELECTED_LEADER_SUCCESS,
  FETCH_SELECTED_LEADER_FAILURE,
)();

function* getSelectedLeaderSaga(action) {
  const { getSelectedLeaderRequest } = action.payload;
  try {
    const data = yield call(walletServices.fetchLeaderInfo, getSelectedLeaderRequest);

    yield put(
      getSelectedLeader.success({
        data,
      }),
    );
  } catch (e) {
    yield put(getSelectedLeader.failure());
  }
}


export const FETCH_SELECTED_LEADER_PROFIT = `${PREFIX}/FETCH_SELECTED_LEADER_PROFIT`;
export const FETCH_SELECTED_LEADER_PROFIT_SUCCESS = `${PREFIX}/FETCH_SELECTED_LEADER_PROFIT_SUCCESS`;
export const FETCH_SELECTED_LEADER_PROFIT_FAILURE = `${PREFIX}/FETCH_SELECTED_LEADER_PROFIT_FAILURE`;

export const getSelectedLeaderProfit = createAsyncAction(
  FETCH_SELECTED_LEADER_PROFIT,
  FETCH_SELECTED_LEADER_PROFIT_SUCCESS,
  FETCH_SELECTED_LEADER_PROFIT_FAILURE,
)();

function* getSelectedLeaderProfitSaga(action) {
  const { getSelectedLeaderProfitRequest } = action.payload;
  try {
    const data = yield call(walletServices.fetchLeaderYield, getSelectedLeaderProfitRequest);

    yield put(
      getSelectedLeaderProfit.success({
        data,
      }),
    );
  } catch (e) {
    yield put(getSelectedLeaderProfit.failure());
  }
}

export const walletAsyncAction = {
  getAllLeader,
  getSelectedLeader,
  getSelectedLeaderProfit,
};

export default function* walletSaga() {
  yield takeLatest(FETCH_ALL_LEADER, getAllLeaderSaga);
  yield takeLatest(FETCH_SELECTED_LEADER, getSelectedLeaderSaga);
  yield takeLatest(FETCH_SELECTED_LEADER_PROFIT, getSelectedLeaderProfitSaga);
}
