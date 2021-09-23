import styled from 'styled-components';
import {
  List,
  Avatar,
  Space,
  Badge as AntdBadge,
  Card as AntdCard,
  Button as AntdButton,
  Divider,
  Row,
  Col,
} from 'antd';

import {
  LikeOutlined,
  NotificationOutlined,
  CopyrightOutlined,
  ArrowRightOutlined,
} from '@ant-design/icons';

const { Meta, Grid } = AntdCard;

export const OuterCard = styled(AntdCard)`
  & .ant-card-body {
    padding: 12px 24px;
  }
  & .ant-card-actions {
    border: none;
    color: inherit;
  }
  & .ant-card-actions > li > span:hover {
    color: inherit;
  }
`;

export const InnerCard = styled(AntdCard).attrs({
  hoverable: false,
  bordered: false,
})`
  & .ant-card-body {
    padding: 2px;
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
  justify-content: space-between;
`;

export const Badge = styled(AntdBadge)`
  margin-right: 1rem;
`;

export const YieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 1rem;
  font-size: 16px;

  @media screen and (max-width: 575px) {
    margin: 1rem 1rem 0;
  }
`;

export const YieldContentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const YieldTitle = styled.div`
  color: ${(props) =>
    props.type === 'ALL'
      ? '#E48701'
      : props.type === 'BEST'
      ? '#F75467'
      : props.type === 'WORST'
      ? '#4386F9'
      : 'inherit'};
`;

export const YieldNumber = styled.div`
  color: ${(props) =>
    props.number ? (props.number > 0 ? '#F75467' : '#4386F9') : 'inherit'};
`;

export const LeaderInfoTitle = styled.div`
  font-size: 13px;
`;

export const LeaderInfoNumber = styled.span`
  font-size: 16px;
`;

export const Button = styled(AntdButton)`
  color: rgba(0, 0, 0, 0.45);
  &:hover,
  &:focus {
    background: inherit;
    color: #1890ff;
  }
`;

export {
  List,
  Avatar,
  Space,
  LikeOutlined,
  NotificationOutlined,
  CopyrightOutlined,
  ArrowRightOutlined,
  Divider,
  Meta,
  Row,
  Col,
};
