import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';

import storage from 'redux-persist/lib/storage';
import { all } from 'redux-saga/effects';

import { bithumbReducer, BITHUMB } from '@store/modules/bithumb';
import bithumbSaga from '@store/modules/bithumb/saga';

const rootPersistConfig = {
  key: 'root',
  storage,
  blacklist: [BITHUMB],
};

const rootReducer = combineReducers({
  [BITHUMB]: bithumbReducer,
});

export function* rootSaga() {
  yield all([bithumbSaga()]);
}

export default persistReducer(rootPersistConfig, rootReducer);
