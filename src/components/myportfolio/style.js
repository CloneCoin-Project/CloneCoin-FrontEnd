import styled from 'styled-components';
import {
  Avatar,
  Card as AntdCard,
  Badge as AntdBadge,
  Button as AntdButton,
  Row,
  Col,
  Divider,
} from 'antd';

import {
  LikeOutlined,
  NotificationOutlined,
  UserOutlined,
  CopyrightOutlined,
  ArrowRightOutlined,
  LikeTwoTone,
  CopyTwoTone,
} from '@ant-design/icons';

const { Meta, Grid } = AntdCard;

export const UserCardWrapper = styled(AntdCard)`
  & .ant-card-body {
    padding: 12px 24px;
  }
`;

export const CardGrid = styled(Grid).attrs({
  hoverable: false,
})`
  width: 100%;
  padding: 0px;
  box-shadow: none;
`;

export const NickNameContainer = styled.div`
  display: flex;
  align-items: center;
  /* justify-content: space-around; */
  font-size: 18px;
`;

export const CopyFollowContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Button = styled(AntdButton)`
  color: ${(props) => (props.color ? props.color : 'inherit')};
  border: none;
  padding: 0 15px;
  height: 28px;
  &:hover,
  &:focus {
    background: inherit;
    color: #1890ff;
  }
`;

export const Badge = styled(AntdBadge)``;

export const BalanceHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 16px;
  height: 28px;
`;

export const DescriptionContainer = styled.div`

`;

export const DescriptionContent = styled.div`
`;


export { NotificationOutlined, UserOutlined, Avatar, Meta, Row, Col, Divider };
