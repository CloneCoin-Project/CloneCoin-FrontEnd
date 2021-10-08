import { useCallback, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router';
import { useWalletData } from '@hooks';

import { isHome, yieldArr, convertToFixed } from '@utils/listUtil';

import * as S from '@components/home/List/style';
import { Divider } from '@components/home/Filter/style';
import {
  HEADER_DIVISION_YILED,
  HEADER_CONTENT_YILED,
  LEADERS_TITLE,
  VIEW_MORE,
} from '@assets/string';

const LeaderInfo = ({ icon, text, number, onClick }) => (
  <S.Row align="center">
    <S.Col span={24}>
      <S.LeaderInfoTitle>{text}</S.LeaderInfoTitle>
    </S.Col>
    <S.Col span={24}>
      <S.Button type="text" icon={icon} onClick={onClick} />
      {/* <S.LeaderInfoNumber>{number}</S.LeaderInfoNumber> API 나오기전까지 임시 disabled */}
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
            <S.YieldTitle type={type}>{title}</S.YieldTitle>
            <S.YieldNumber number={number}>{number}</S.YieldNumber>
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

  useEffect(() => {
    getAllLeader();
  }, []);

  const handlePortfolioClick = useCallback(() => {
    navigate({ pathname: '/leader' });
  }, [navigate]);

  const handleLeaderListClick = useCallback(() => {
    navigate({ pathname: '/leaderlist' });
  }, [navigate]);

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
                  text="Follower"
                  icon={<S.LikeOutlined style={{ fontSize: 18 }} />}
                  number={156}
                  key="list-vertical-follow-o"
                />,
                <LeaderInfo
                  text="Copier"
                  icon={<S.CopyrightOutlined style={{ fontSize: 18 }} />}
                  number={156}
                  key="list-vertical-cory-o"
                />,
                <LeaderInfo
                  text="More"
                  icon={<S.ArrowRightOutlined style={{ fontSize: 18 }} />}
                  key="list-vertical-more-o"
                  onClick={handlePortfolioClick}
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
                      all={convertToFixed(item.all)}
                      best={convertToFixed(item.best)}
                      worst={convertToFixed(item.worst)}
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
