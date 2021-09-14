// import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
// import { useDispatch, useSelector } from "react-redux";
// import logger from "redux-logger";
// import persistStore from "redux-persist/es/persistStore";

// // const sagaMiddleware = createSagaMiddleware();

// const initStore = (preloadedState) => {
//   const middleware = [
//     ...getDefaultMiddleware({
//       thunk: false,
//     }),
//     // sagaMiddleware,
//   ];

//   if (process.env.NODE_ENV === "development") {
//     middleware.push(logger);
//   }

//   const store = configureStore({
//     // reducer: rootReducer,
//     middleware,
//     devTools: process.env.NODE_ENV === "development",
//     preloadedState,
//   });

//   const persistor = persistStore(store);
//   // sagaMiddleware.run(rootSaga);
//   return { store, persistor };
// };

// export const useAppDispatch = () => useDispatch();
// export const useAppSelector = useSelector;

// const { store, persistor } = initStore();
// export { store, persistor };
