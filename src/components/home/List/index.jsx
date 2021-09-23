import React, { useCallback } from 'react';
import { useNavigate } from 'react-router';

import * as S from '@components/home/List/style';
import { OVERALL_YILED, BEST_YILED, WORST_YILED } from '@assets/string';

const LeaderInfo = ({ text, number, onClick }) => (
  <S.Space>
    <S.Button type="text" onClick={onClick}>
      {text}
      {number}
    </S.Button>
  </S.Space>
);

const YieldList = () => {
  return (
    <S.YieldContainer>
      <S.YieldContentContainer>
        <S.YieldTitle type="ALL">{OVERALL_YILED}</S.YieldTitle>
        <S.YieldNumber number={10}>+10.0%</S.YieldNumber>
      </S.YieldContentContainer>
      <S.YieldContentContainer>
        <S.YieldTitle type="BEST">{BEST_YILED}</S.YieldTitle>
        <S.YieldNumber number={10}>+32.0%</S.YieldNumber>
      </S.YieldContentContainer>
      <S.YieldContentContainer>
        <S.YieldTitle type="WORST">{WORST_YILED}</S.YieldTitle>
        <S.YieldNumber number={-7}>-7.2%</S.YieldNumber>
      </S.YieldContentContainer>
    </S.YieldContainer>
  );
};

const List = () => {
  const navigate = useNavigate();

  const listData = [];
  for (let i = 0; i < 10; i++) {
    listData.push({
      nickName: `Nick Name ${i}`,
      avatar:
        'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
      description:
        'Ant Design, a design language for background applications, is refined by Ant UED Team.',
    });
  }

  const handlePortfolioClick = useCallback(() => {
    navigate({ pathname: '/leader' });
  }, [navigate]);

  return (
    <S.List
      dataSource={listData}
      renderItem={(item) => (
        <S.List.Item key={item.nickName}>
          <S.OuterCard
            hoverable
            bordered={false}
            actions={[
              <LeaderInfo
                text="Follower :"
                number={156}
                key="list-vertical-star-o"
              />,
              <LeaderInfo
                text="Copier :"
                number={156}
                key="list-vertical-like-o"
              />,
              <LeaderInfo text="Clone Coin" key="list-vertical-like-o" />,
              <LeaderInfo
                text="Go to Portfolio"
                key="list-vertical-like-o"
                onClick={handlePortfolioClick}
              />,
            ]}
          >
            <S.Row>
              <S.Col xs={24} sm={12}>
                <S.CardGrid>
                  <S.InnerCard>
                    <S.Meta
                      avatar={<S.Avatar src={item.avatar} />}
                      title={
                        <S.NickNameContainer>
                          {item.nickName}
                          <S.Badge dot>
                            <S.NotificationOutlined style={{ fontSize: 16 }} />
                          </S.Badge>
                        </S.NickNameContainer>
                      }
                      description={item.description}
                    />
                  </S.InnerCard>
                </S.CardGrid>
              </S.Col>
              <S.Col xs={24} sm={12}>
                <S.CardGrid>
                  <YieldList />
                </S.CardGrid>
              </S.Col>
            </S.Row>
          </S.OuterCard>
        </S.List.Item>
      )}
    />
  );
};

export default List;
