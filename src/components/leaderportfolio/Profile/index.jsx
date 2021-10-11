import { useEffect } from 'react';
import { useLocation } from 'react-router';

import { useWalletData, usePortfolioData, useUserData } from '@hooks';
import LeaderDescription from '@/components/common/LeaderDescription';

import * as S from '@components/leaderportfolio/Profile/style';

const LeaderProfile = () => {
  const location = useLocation();
  const { pathname } = location;
  const { getSelectedLeader, selectedLeaderData } = useWalletData();
  const { leaderName } = selectedLeaderData;
  const { getCopiedAmount, copiedAmountSelectorData } = usePortfolioData();
  const { getMyFollower, userFollowerData } = useUserData();

  useEffect(() => {
    if (!pathname) return;
    const pathSplited = pathname.split('/');
    const leaderId = pathSplited[pathSplited.length - 1];
    getSelectedLeader({ getSelectedLeaderRequest: { leaderId } });
    getMyFollower({ getMyFollowerRequest: { leaderId } });
    getCopiedAmount({ fetchCopiedAmountRequest: { leaderId } });
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
                <S.Button color="#4386F9" type="text">
                  리더
                </S.Button>
              </S.NickNameContainer>
            </S.Col>
            <S.Col xs={24} sm={24}>
              <S.CopyFollowContainer>
                <>
                  <S.Button type="text">{`copied: ${
                    copiedAmountSelectorData?.copyAmount
                      ? copiedAmountSelectorData.copyAmount
                      : 0
                  }`}</S.Button>
                  <S.Divider type="vertical" />
                  <S.Button type="text">{`follower: ${
                    userFollowerData?.length ? userFollowerData.length : 0
                  }`}</S.Button>
                </>
              </S.CopyFollowContainer>
            </S.Col>
          </S.Row>
        </S.Col>

        <S.Col xs={24} sm={12}>
          <S.Row justify="center"></S.Row>
        </S.Col>
      </S.Row>
      <LeaderDescription />
    </>
  );
};

export default LeaderProfile;
