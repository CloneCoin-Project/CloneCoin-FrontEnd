import { useCallback } from 'react';

import { useAppSelector, useAppDispatch } from '@store';
import { userAsyncAction } from '@store/modules/user/saga';
import { LoginStatusSelector } from '@store/modules/user';

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

  return { signIn, loginStatusLoading, loginStatusData, loginStatusError };
};

export default useUserData;
