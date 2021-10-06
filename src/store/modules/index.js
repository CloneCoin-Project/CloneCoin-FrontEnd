import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';

import storage from 'redux-persist/lib/storage';
import { all } from 'redux-saga/effects';

import { bithumbReducer, BITHUMB } from '@store/modules/bithumb';
import { userReducer, USER } from '@store/modules/user';
import { walletReducer, WALLET } from '@store/modules/wallet';

import bithumbSaga from '@store/modules/bithumb/saga';
import userSaga from '@store/modules/user/saga';
import walletSaga from '@store/modules/wallet/saga';

const rootPersistConfig = {
  key: 'root',
  storage,
  blacklist: [BITHUMB, WALLET],
};

const rootReducer = combineReducers({
  [BITHUMB]: bithumbReducer,
  [USER]: userReducer,
  [WALLET]: walletReducer,
});

export function* rootSaga() {
  yield all([bithumbSaga(), userSaga(), walletSaga()]);
}

export default persistReducer(rootPersistConfig, rootReducer);
