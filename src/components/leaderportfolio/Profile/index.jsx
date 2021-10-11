import { useEffect } from 'react';
import { useLocation } from 'react-router';

import { useWalletData } from '@hooks';
import LeaderDescription from '@/components/common/LeaderDescription';

import { COPY_BUTTON } from '@assets/string';

import * as S from '@components/leaderportfolio/Profile/style';

const LeaderProfile = () => {
  const location = useLocation();
  const { pathname } = location;
  const { getSelectedLeader, selectedLeaderData } = useWalletData();
  const {leaderName} = selectedLeaderData;

  useEffect(() => {
    if(!pathname) return;
    const pathSplited = pathname.split('/');
    const leaderId = pathSplited[pathSplited.length-1];
    getSelectedLeader({ getSelectedLeaderRequest: { leaderId } });
  }, [pathname]);

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
                {leaderName}
              </S.NickNameContainer>
            </S.Col>
            <S.Col xs={24} sm={24}>
              <S.CopyFollowContainer>
                  <>
                    <S.Button type="text">copied: 10</S.Button>
                    <S.Divider type="vertical" />
                    <S.Button type="text">follower: 3</S.Button>
                  </>
              </S.CopyFollowContainer>
            </S.Col>
          </S.Row>
        </S.Col>

        <S.Col xs={24} sm={12}>
          <S.Row justify="center">
          </S.Row>
        </S.Col>
      </S.Row>
      <LeaderDescription />
    </>
  );
};

export default LeaderProfile;
