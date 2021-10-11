import { useCallback, useMemo } from 'react';

import { useAppSelector, useAppDispatch } from '@store';
import { userAsyncAction } from '@store/modules/user/saga';
import {
  LoginStatusSelector,
  LeaderRegisterSelector,
  UserDescriptionSelector,
  UserFollowerSelector,
  UserFollowingSelector,
  FollowLeaderSelector,
  FollowDeleteLeaderSelector,
  userAction,
} from '@store/modules/user';

import { convertObjArrToPropArr } from '@utils/parse';

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

  const [userFollowerLoading, userFollowerData, userFollowerError] = [
    useAppSelector(UserFollowerSelector.loading),
    useAppSelector(UserFollowerSelector.data),
    useAppSelector(UserFollowerSelector.error),
  ];

  const [userFollowingLoading, userFollowingData, userFollowingError] = [
    useAppSelector(UserFollowingSelector.loading),
    useAppSelector(UserFollowingSelector.data),
    useAppSelector(UserFollowingSelector.error),
  ];

  const [followLeaderLoading, followLeaderError] = [
    useAppSelector(FollowLeaderSelector.loading),
    useAppSelector(FollowLeaderSelector.error),
  ];

  const [followDeleteLeaderLoading, followDeleteLeaderError] = [
    useAppSelector(FollowDeleteLeaderSelector.loading),
    useAppSelector(FollowDeleteLeaderSelector.error),
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

  const getDescription = useCallback(
    (value) => {
      //getDescriptionRequest {userid: id}
      dispatch(userAsyncAction.getDescription.request(value));
    },
    [dispatch],
  );

  const postDescription = useCallback(
    (value) => {
      //postDescriptionRequest {userid: id, description: string}, onSuccess, onFailure
      dispatch(userAsyncAction.postDescription.request(value));
    },
    [dispatch],
  );

  const getMyFollower = useCallback(
    (value) => {
      dispatch(userAsyncAction.getMyFollower.request(value));
    },
    [dispatch],
  );

  const getMyFollowing = useCallback(
    (value) => {
      dispatch(userAsyncAction.getMyFollowing.request(value));
    },
    [dispatch],
  );

  const startFollow = useCallback(
    (value) => {
      dispatch(userAsyncAction.startFollow.request(value));
    },
    [dispatch],
  );

  const deleteFollow = useCallback(
    (value) => {
      dispatch(userAsyncAction.deleteFollow.request(value));
    },
    [dispatch],
  );

  const ID = useMemo(() => loginStatusData?.ID, [loginStatusData]);
  const userName = useMemo(() => loginStatusData?.userName, [loginStatusData]);
  const userId = useMemo(() => loginStatusData?.userId, [loginStatusData]);
  const email = useMemo(() => loginStatusData?.email, [loginStatusData]);
  const userStatus = useMemo(() => loginStatusData?.status, [loginStatusData]);

  const currentFollowingLeaders = useMemo(
    () => {
      if (userFollowingData) {
        return convertObjArrToPropArr(userFollowingData, 'leaderId');
      } else {
        return [];
      }
    },
    /*
	() =>
	userFollowingData
        ? convertObjArrToPropArr(userFollowingData, 'leaderId');
        : [],
	*/
    [userFollowingData, followLeaderLoading, followDeleteLeaderLoading],
  );

  return {
    signIn,
    signUp,
    leaderRegister,
    logout,
    getDescription,
    postDescription,
    getMyFollower,
    getMyFollowing,
    startFollow,
    deleteFollow,
    loginStatusLoading,
    loginStatusData,
    loginStatusError,
    leaderRegisterLoading,
    leaderRegisterError,
    userDescriptionLoading,
    userDescriptionData,
    userDescriptionError,
    userFollowerLoading,
    userFollowerData,
    userFollowerError,
    userFollowingLoading,
    userFollowingData,
    userFollowingError,
    followLeaderLoading,
    followLeaderError,
    followDeleteLeaderLoading,
    followDeleteLeaderError,
    isLogged,
    ID,
    userName,
    userId,
    email,
    userStatus,
    currentFollowingLeaders,
  };
};

export default useUserData;
