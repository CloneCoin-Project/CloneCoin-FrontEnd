import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import createSagaMiddleware from 'redux-saga';

import logger from 'redux-logger';
import persistStore from 'redux-persist/es/persistStore';

import rootReducer, { rootSaga } from '@store/modules';

const sagaMiddleware = createSagaMiddleware();

const initStore = (preloadedState) => {

  const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => {
      let _middleware = [
        ...getDefaultMiddleware({
          thunk: false,
          serializableCheck: false,
        }),
        sagaMiddleware,
      ];
      if (process.env.NODE_ENV === 'development') {
        _middleware.push(logger);
      }
      return _middleware;
    },
    devTools: process.env.NODE_ENV === 'development',
    preloadedState,
  });

  const persistor = persistStore(store);
  sagaMiddleware.run(rootSaga);
  return { store, persistor };
};

export const useAppDispatch = () => useDispatch();
export const useAppSelector = useSelector;

const { store, persistor } = initStore();
export { store, persistor };
