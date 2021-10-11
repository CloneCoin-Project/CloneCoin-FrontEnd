import { useCallback, useEffect } from 'react';
import { useUserData, useWalletData, usePortfolioData } from '@hooks';
import LeaderRegisterModal from '@components/myportfolio/LeaderRegisterModal';
import LeaderDescription from '@/components/common/LeaderDescription';
import {
  LeaderBalance,
  NormalBalance,
} from '@components/myportfolio/Profile/Balance';

import * as S from '@components/myportfolio/style';
import {
  TEXT_LEADER_KR,
  HOLDING_KRW,
  HOLDING_TOTAL,
  STATUS_LEADER,
  STATUS_NORMAL,
  TEXT_LEADER_DELETE,
} from '@assets/string';

const MyProfile = () => {
  const {
    ID,
    userName,
    userStatus,
    getMyFollowing,
    userFollowingData,
    getMyFollower,
    userFollowerData,
  } = useUserData();
  const { getSelectedLeader } = useWalletData();
  const {
    getMyportfolio,
    getMyCopyCoin,
    getMyportfolioRatio,
    myPortfolioRatioSelectorData,
  } = usePortfolioData();

  useEffect(() => {
    if (userStatus === STATUS_LEADER) {
      getSelectedLeader({ getSelectedLeaderRequest: { leaderId: ID } });
      getMyFollower({ getMyFollowerRequest: { leaderId: ID } });
    } else if (userStatus === STATUS_NORMAL) {
      getMyportfolioRatio({
        getMyportfolioRatioRequest: { userId: ID },
      });
      getMyFollowing({
        getMyFollowingRequest: { userId: ID },
      });
      getMyportfolio({ getMyportfolioRequest: { userId: ID } });
      getMyCopyCoin({ getMyCopyCoinRequest: { userId: ID } });
    }
  }, [userStatus]);
  const handleLeaderDeleteClick = useCallback(() => {
    S.message.info('현재 비활성화된 기능입니다.');
  }, [userStatus]);

  return (
    <>
      <S.Row gutter={[12]} align="middle">
        <S.Col xs={6} sm={3}>
          <S.Avatar size={52} icon={<S.UserOutlined />} />
        </S.Col>
        <S.Col xs={18} sm={9}>
          <S.Row>
            <S.Col span={24}>
              <S.NickNameContainer>
                {userName}
                {userStatus === STATUS_LEADER ? (
                  <S.Popconfirm title={TEXT_LEADER_DELETE}>
                    <S.Button
                      color="#e48701"
                      type="text"
                      onClick={handleLeaderDeleteClick}
                    >
                      {TEXT_LEADER_KR}
                    </S.Button>
                  </S.Popconfirm>
                ) : (
                  <LeaderRegisterModal />
                )}
              </S.NickNameContainer>
            </S.Col>
            <S.Col xs={24} sm={24}>
              <S.CopyFollowContainer>
                {userStatus === STATUS_LEADER ? (
                  <>
                    <S.Button type="text">copied: 2</S.Button>
                    <S.Divider type="vertical" />
                    <S.Button type="text">{`follower: ${
                      userFollowerData?.length ? userFollowerData.length : 0
                    }`}</S.Button>
                  </>
                ) : (
                  <>
                    <S.Button type="text">{`copying: ${
                      myPortfolioRatioSelectorData?.length
                        ? myPortfolioRatioSelectorData?.length
                        : 0
                    }`}</S.Button>
                    <S.Divider type="vertical" />
                    <S.Button type="text">{`following: ${
                      userFollowingData?.length ? userFollowingData?.length : 0
                    }`}</S.Button>
                  </>
                )}
              </S.CopyFollowContainer>
            </S.Col>
          </S.Row>
        </S.Col>

        <S._Col xs={24} sm={12}>
          <S._Row>
            <S.Col span={24}>
              <S.BalanceHeader>
                <span>{HOLDING_KRW}</span>
                <span>{HOLDING_TOTAL}</span>
              </S.BalanceHeader>
            </S.Col>
            <S.Col span={24}>
              <S.BalanceContent>
                {userStatus === STATUS_LEADER ? (
                  <LeaderBalance />
                ) : (
                  <NormalBalance />
                )}
              </S.BalanceContent>
            </S.Col>
          </S._Row>
        </S._Col>
      </S.Row>
      {userStatus === STATUS_LEADER && <LeaderDescription />}
    </>
  );
};

export default MyProfile;
