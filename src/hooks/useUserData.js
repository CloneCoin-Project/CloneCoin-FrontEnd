import { useCallback, useMemo } from 'react';

import { useAppSelector, useAppDispatch } from '@store';
import { userAsyncAction } from '@store/modules/user/saga';
import { LoginStatusSelector, userAction } from '@store/modules/user';

const useUserData = () => {
  const dispatch = useAppDispatch();

  const [loginStatusLoading, loginStatusData, loginStatusError] = [
    useAppSelector(LoginStatusSelector.loading),
    useAppSelector(LoginStatusSelector.data),
    useAppSelector(LoginStatusSelector.error),
  ];

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
    logout,
    loginStatusLoading,
    loginStatusData,
    loginStatusError,
    isLogged,
    ID,
    userName,
    userId,
    email,
    userStatus,
  };
};

export default useUserData;
