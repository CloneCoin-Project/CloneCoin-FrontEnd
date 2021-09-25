import styled from 'styled-components';
import { Card as AntdCard, Button as AntdButton, Avatar as AntdAvatar } from 'antd';
import { UserOutlined, StarOutlined, StarFilled } from '@ant-design/icons';

// Upper Section
export const Avatar = styled(AntdAvatar)`
	position: relative;
	display: inline-block;
	margin: auto 10px;
	overflow: hidden;
`;

export const Nickname = styled.h2`
	display: block;
`;

export const Count = styled.div`
	display: block;
	color: #666666;
`;

export const FollowButton = styled(AntdButton)`
	display: inline-block;
	margin: 0 5px;
	font-size: 20px;
`;

export const CopyButton = styled(AntdButton)`
	flex-grow: 1;
	margin: auto 10px;
`;

export const InnerSection = styled.div`
	display: flex;
	flex-direction: column;
	flex-grow: 5;
	margin: auto 10px;
	padding: auto 5px;
	max-height: 
`;

export const UpperSection = styled.div`
	display: flex;
	flex-wrap: wrap;
	padding: 5px 0;
`;

// Under Section (Description)
export const Introduction = styled.span`
`;

export const EditButton = styled(AntdButton)`
	display: inline-block;
	color: #bcbcbc;

	span {
		border-bottom: 2px solid #bcbcbc;
	}
	span:hover {
		border-bottom: 2px solid #1890FF !important;
	}

	&:hover {
		color: #1890FF;
	}
`;

export const UnderSection = styled.div`
	padding: 5px 10px;
	color: #666666;
`;

// ProfileCard
export const ProfileCard = styled.div`
	width: 100%;
`;

export { 
	UserOutlined,
	StarOutlined, 
	StarFilled 
};
