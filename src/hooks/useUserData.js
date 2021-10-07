import { useCallback, useMemo } from 'react';

import { useAppSelector, useAppDispatch } from '@store';
import { userAsyncAction } from '@store/modules/user/saga';
import {
  LoginStatusSelector,
  LeaderRegisterSelector,
  UserDescriptionSelector,
  userAction,
} from '@store/modules/user';

const useUserData = () => {
  const dispatch = useAppDispatch();

  const [loginStatusLoading, loginStatusData, loginStatusError] = [
    useAppSelector(LoginStatusSelector.loading),
    useAppSelector(LoginStatusSelector.data),
    useAppSelector(LoginStatusSelector.error),
  ];

  const [leaderRegisterLoading, leaderRegisterError] = [
    useAppSelector(LeaderRegisterSelector.loading),
    useAppSelector(LeaderRegisterSelector.error),
  ];

  const [userDescriptionLoading, userDescriptionData, userDescriptionError] = [
    useAppSelector(UserDescriptionSelector.loading),
    useAppSelector(UserDescriptionSelector.data),
    useAppSelector(UserDescriptionSelector.error),
  ];

  const getDescription = useCallback(
    (value) => {
      //getDescriptionRequest {userid: id}
      dispatch(userAsyncAction.getDescription.request(value));
    },
    [dispatch],
  );

  const signIn = useCallback(
    (value) => {
      //signInRequest {userId, password} onSuccess, onFailure
      dispatch(userAsyncAction.signIn.request(value));
    },
    [dispatch],
  );

  const signUp = useCallback(
    (value) => {
      //signUpRequest {...} onSuccess, onFailure
      dispatch(userAsyncAction.signUp.request(value));
    },
    [dispatch],
  );

  const leaderRegister = useCallback(
    (value) => {
      //leaderRegisterRequest {ID, apiKey, secretKey} onSuccess, onFailure
      dispatch(userAsyncAction.leaderRegister.request(value));
    },
    [dispatch],
  );

  const logout = useCallback(() => {
    dispatch(userAction.logout());
  }, [dispatch]);

  const isLogged = useMemo(
    () => (loginStatusData?.userId ? true : false),
    [loginStatusData],
  );

  const ID = useMemo(() => loginStatusData?.ID, [loginStatusData]);
  const userName = useMemo(() => loginStatusData?.userName, [loginStatusData]);
  const userId = useMemo(() => loginStatusData?.userId, [loginStatusData]);
  const email = useMemo(() => loginStatusData?.email, [loginStatusData]);
  const userStatus = useMemo(() => loginStatusData?.status, [loginStatusData]);

  return {
    signIn,
    signUp,
    leaderRegister,
    logout,
    loginStatusLoading,
    loginStatusData,
    loginStatusError,
    leaderRegisterLoading,
    leaderRegisterError,
    userDescriptionLoading,
    userDescriptionData,
    userDescriptionError,
    isLogged,
    ID,
    userName,
    userId,
    email,
    userStatus,
    getDescription,
  };
};

export default useUserData;
