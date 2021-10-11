import { useCallback, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router';
import { useWalletData, useUserData, usePortfolioData } from '@hooks';

import { STATUS_LEADER } from '@assets/string';
import { isHome, yieldArr } from '@utils/listUtil';
import { convertToFixed } from '@utils/parse';

import { CopyModal } from '@/components/modal';
import * as S from '@components/home/List/style';
import { Divider } from '@components/home/Filter/style';
import {
  HEADER_DIVISION_YILED,
  HEADER_CONTENT_YILED,
  LEADERS_TITLE,
  VIEW_MORE,
} from '@assets/string';

const LeaderInfo = ({ icon, text, onClick }) => (
  <S.Row align="center">
    <S.Col span={24}>
      <S.LeaderInfoTitle>{text}</S.LeaderInfoTitle>
    </S.Col>
    <S.Col span={24}>
      <S.Button type="text" icon={icon} onClick={onClick} />
    </S.Col>
  </S.Row>
);

const YieldList = ({ all, best, worst }) => {
  return (
    <S.YieldContainer>
      <S.YieldContentContainer>
        <S.YieldTitle type="HEADER">{HEADER_DIVISION_YILED}</S.YieldTitle>
        <S.YieldNumber>{HEADER_CONTENT_YILED}</S.YieldNumber>
      </S.YieldContentContainer>
      {yieldArr(all, best, worst).map((value) => {
        const { type, title, number } = value;
        return (
          <S.YieldContentContainer key={`${type}`}>
            <S.YieldTitle type={ type }>{title}</S.YieldTitle>
            <S.YieldNumber type={ type }>{number}</S.YieldNumber>
          </S.YieldContentContainer>
        );
      })}
    </S.YieldContainer>
  );
};

const List = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { pathname } = location;

  const { getAllLeader, LeaderListLoading, refinedLeaderList } =
    useWalletData();
  const { 
	currentFollowingLeaders, isLogged, ID, userStatus, startFollow, deleteFollow, getMyFollowing,
  } = useUserData();
  const { getMyportfolio, normalUserBalance } = usePortfolioData();

  useEffect(() => {
    getAllLeader();
  }, []);

  useEffect(() => {
    if (isLogged && userStatus === 'normal') {
      getMyportfolio({ getMyportfolioRequest: { userId: ID } });
    }
  }, [userStatus, isLogged]);

  const handlePortfolioClick = useCallback(
    (leaderId) => {
      navigate({ pathname: `/leader/${leaderId}` });
    },
    [navigate],
  );

  const handleLeaderListClick = useCallback(() => {
    navigate({ pathname: '/leaderlist' });
  }, [navigate]);

  const onRequest = useCallback((leaderId) => {
	if (currentFollowingLeaders.includes(leaderId)) {
		deleteFollow({
			followDeleteRequest: {
				userId: ID,
				leaderId,
			},
			onSuccess: () => {
				/*
				getMyFollowing({ 
					getMyFollowingRequest: { userId: ID } 
				});
				*/
				S.message.success('팔로우를 취소했습니다.');
			},
			onFailure: () => {
				S.message.error('에러가 발생하였습니다.');
			},
		}, []);
	}
	else {
		startFollow({
			followRequest: {
				userId: ID,
				leaderId,
			},
			onSuccess: () => {
				/*
				getMyFollowing({ 
					getMyFollowingRequest: { userId: ID } 
				});
				*/
				S.message.success('팔로우를 완료했습니다.');
			},
			onFailure: () => {
				S.message.error('에러가 발생하였습니다.');
			},
		}, []);
	}
  })

  const rejectRequest = () => {
	if (!isLogged) {
		return S.message.error('로그인이 필요한 서비스입니다.');
	}
	return S.message.error('일반 유저만 이용할 수 있는 서비스입니다.');
  }

  return (
    <>
      {isHome(pathname) && (
        <S.DividerContainer onClick={handleLeaderListClick}>
          <S.Ribbon text={VIEW_MORE}>
            <Divider orientation="left">{LEADERS_TITLE}</Divider>
          </S.Ribbon>
        </S.DividerContainer>
      )}
      <S.List
        dataSource={refinedLeaderList}
        renderItem={(item) => (
          <S.List.Item key={item.leaderName}>
            <S.OuterCard
              hoverable
              loading={LeaderListLoading}
              bordered={false}
              actions={[
                <LeaderInfo
                  onClick={ (isLogged && userStatus != STATUS_LEADER) ? () => onRequest(item.leaderId) : rejectRequest }
                  text="Follower"
                  icon={<S.LikeOutlined style={{ fontSize: 18 }} />}
                  number={156}
                  key="list-vertical-follow-o"
                />,
                <CopyModal
                  key={item.leaderName}
                  leaderId={item.leaderId}
                  leaderName={item.leaderName}
                  leaderEarningRate={item.all}
                  leaderEarningBest={item.best}
                  triggerButton={
                    <LeaderInfo
                      text="Copy"
                      icon={<S.CopyrightOutlined style={{ fontSize: 18 }} />}
                      number={156}
                      key="list-vertical-cory-o"
                    />
                  }
                />,
                <LeaderInfo
                  text="More"
                  icon={<S.ArrowRightOutlined style={{ fontSize: 18 }} />}
                  key="list-vertical-more-o"
                  onClick={() => {
                    handlePortfolioClick(item.leaderId);
                  }}
                />,
              ]}
            >
              <S.Row>
                <S.Col xs={24} sm={12}>
                  <S.CardGrid>
                    <S.InnerCard>
                      <S.Meta
                        avatar={
                          <S.Avatar size={40} icon={<S.UserOutlined />} />
                        }
                        title={
                          <S.NickNameContainer>
                            {item.leaderName}
                          </S.NickNameContainer>
                        }
                        description={item.description ?? ''}
                      />
                    </S.InnerCard>
                  </S.CardGrid>
                </S.Col>
                <S.Col xs={24} sm={12}>
                  <S.CardGrid>
                    <YieldList
                      all={convertToFixed(item.all, 2)}
                      best={convertToFixed(item.best, 2)}
                      worst={convertToFixed(item.worst, 2)}
                    />
                  </S.CardGrid>
                </S.Col>
              </S.Row>
            </S.OuterCard>
          </S.List.Item>
        )}
      />
    </>
  );
};

export default List;
