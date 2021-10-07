import { useCallback } from 'react';
import { useUserData } from '@hooks';
import LeaderRegisterModal from '@components/myportfolio/LeaderRegisterModal';
import LeaderDescription from '@components/myportfolio/Profile/Description';

import * as S from '@components/myportfolio/style';
import {
  TEXT_LEADER_KR,
  DESC_TITLE,
  HOLDING_KRW,
  HOLDING_TOTAL,
  STATUS_LEADER,
  TEXT_LEADER_DELETE,
} from '@assets/string';

const MyProfile = () => {
  const { userName, userStatus } = useUserData();

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
                <S.Button type="text">copied: 10</S.Button>
                <S.Divider type="vertical" />
                <S.Button type="text">follower: 3</S.Button>
              </S.CopyFollowContainer>
            </S.Col>
          </S.Row>
        </S.Col>

        <S.Col xs={24} sm={12}>
          <S.Row>
            <S.Col span={24}>
              <S.BalanceHeader>
                <span>{HOLDING_KRW}</span>
                <span>{HOLDING_TOTAL}</span>
              </S.BalanceHeader>
            </S.Col>
            <S.Col span={24}>
              <S.BalanceContent>
                <span>{'1,000,000'}</span>
                <span>{'1,000,000'}</span>
              </S.BalanceContent>
            </S.Col>
          </S.Row>
        </S.Col>
      </S.Row>
      {userStatus === STATUS_LEADER && <LeaderDescription />}
    </>
  );
};

export default MyProfile;
