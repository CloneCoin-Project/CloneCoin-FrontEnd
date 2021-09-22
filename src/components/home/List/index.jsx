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
      href: 'https://ant.design',
      title: `ant design part ${i}`,
      avatar:
        'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
      description:
        'Ant Design, a design language for background applications, is refined by Ant UED Team.',
    });
  }

  return (
    <S.List
      itemLayout="vertical"
      dataSource={listData}
      renderItem={(item) => (
        <S.List.Item
          key={item.title}
          extra={
            <img
              width={272}
              alt="logo"
              src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
            />
          }
        >
          {/* <S.List.Item.Meta
            avatar={<S.Avatar src={item.avatar} />}
            title={<a href={item.href}>{item.title}</a>}
            description={item.description}
          /> */}
          <S.Card
            hoverable
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
            ]}
          >
            <S.Meta
              avatar={<S.Avatar src={item.avatar} />}
              title={<a href={item.href}>{item.title}</a>}
              description={item.description}
            />
          </S.Card>
        </S.List.Item>
      )}
    />
  );
};

export default List;
