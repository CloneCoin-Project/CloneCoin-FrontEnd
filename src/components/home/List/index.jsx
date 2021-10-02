import React, { useCallback } from 'react';
import { useNavigate } from 'react-router';

import * as S from '@components/home/List/style';
import { Divider } from '@components/home/Filter/style';
import {
  OVERALL_YILED,
  BEST_YILED,
  WORST_YILED,
  HEADER_DIVISION_YILED,
  HEADER_CONTENT_YILED,
  LEADERS_TITLE,
  VIEW_MORE
} from '@assets/string';

const LeaderInfo = ({ icon, text, number, onClick }) => (
  <S.Row align="center">
    <S.Col span={24}>
      <S.LeaderInfoTitle>{text}</S.LeaderInfoTitle>
    </S.Col>
    <S.Col span={24}>
      <S.Button type="text" icon={icon} onClick={onClick} />
      <S.LeaderInfoNumber>{number}</S.LeaderInfoNumber>
    </S.Col>
  </S.Row>
);

const YieldList = () => {
  return (
    <S.YieldContainer>
      <S.YieldContentContainer>
        <S.YieldTitle type="HEADER">{HEADER_DIVISION_YILED}</S.YieldTitle>
        <S.YieldNumber>{HEADER_CONTENT_YILED}</S.YieldNumber>
      </S.YieldContentContainer>
      <S.YieldContentContainer>
        <S.YieldTitle type="ALL">{OVERALL_YILED}</S.YieldTitle>
        <S.YieldNumber number={10}>+10.0</S.YieldNumber>
      </S.YieldContentContainer>
      <S.YieldContentContainer>
        <S.YieldTitle type="BEST">{BEST_YILED}</S.YieldTitle>
        <S.YieldNumber number={10}>+32.0</S.YieldNumber>
      </S.YieldContentContainer>
      <S.YieldContentContainer>
        <S.YieldTitle type="WORST">{WORST_YILED}</S.YieldTitle>
        <S.YieldNumber number={-7}>-7.2</S.YieldNumber>
      </S.YieldContentContainer>
    </S.YieldContainer>
  );
};

const List = () => {
  const navigate = useNavigate();

  const listData = [];
  for (let i = 0; i < 2; i++) {
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
	<>
		<S.Ribbon text={ VIEW_MORE } color="#E8D5A3"><Divider orientation="left">{ LEADERS_TITLE }</Divider></S.Ribbon>
		<S.List
		dataSource={listData}
		renderItem={(item) => (
			<S.List.Item key={item.nickName}>
			<S.OuterCard
				hoverable
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
						avatar={<S.Avatar src={item.avatar} />}
						title={
							<S.NickNameContainer>
							{item.nickName}
							{/* <S.Badge dot>
								<S.NotificationOutlined style={{ fontSize: 16 }} />
							</S.Badge> */}
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
	</>
  );
};

export default List;
