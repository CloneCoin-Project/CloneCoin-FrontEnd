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
    (signInRequest) => {
      //userId, password
      dispatch(userAsyncAction.signIn.request(signInRequest));
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

  return {
    signIn,
    logout,
    loginStatusLoading,
    loginStatusData,
    loginStatusError,
    isLogged,
  };
};

export default useUserData;
