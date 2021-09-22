import React from 'react';
import * as S from '@components/home/List/style';

const LeaderInfo = ({ text, number }) => (
  <S.Space>
    {text}
    {number}
  </S.Space>
);

const List = () => {
  const listData = [];
  for (let i = 0; i < 23; i++) {
    listData.push({
      title: `Nick Name ${i}`,
      avatar:
        'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
      description:
        'Ant Design, a design language for background applications, is refined by Ant UED Team.',
    });
  }

  return (
    <S.List
      dataSource={listData}
      renderItem={(item) => (
        <S.List.Item key={item.title}>
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
              <LeaderInfo
                text="Clone Coin"
                // number={156}
                key="list-vertical-like-o"
              />,
              <LeaderInfo
                text="Go to Portfolio"
                // number={156}
                key="list-vertical-like-o"
              />,
            ]}
          >
            <S.CardGrid>
              <S.InnerCard>
                <S.Meta
                  avatar={<S.Avatar src={item.avatar} />}
                  title={item.title}
                  description={item.description}
                />
              </S.InnerCard>
            </S.CardGrid>
            <S.CardGrid>
              <img
                width={272}
                alt="logo"
                src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
              />
            </S.CardGrid>
          </S.OuterCard>
        </S.List.Item>
      )}
    />
  );
};

export default List;
