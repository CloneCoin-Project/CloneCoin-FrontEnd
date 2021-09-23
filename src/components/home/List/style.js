import styled from 'styled-components';
import {
  List,
  Avatar,
  Space,
  Badge as AntdBadge,
  Card as AntdCard,
  Row,
  Col,
  Button,
} from 'antd';

import {
  LikeOutlined,
  StarOutlined,
  NotificationOutlined,
} from '@ant-design/icons';

const { Meta, Grid } = AntdCard;

export const OuterCard = styled(AntdCard)`
  & .ant-card-body {
    padding: 12px 24px;
  }
  & .ant-card-actions {
    border: none;
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
      : '#4386F9'};
`;

export const YieldNumber = styled.div`
  color: ${(props) => (props.number > 0 ? '#F75467' : '#4386F9')};
`;

export {
  List,
  Avatar,
  Space,
  LikeOutlined,
  StarOutlined,
  NotificationOutlined,
  Meta,
  Row,
  Col,
  Button,
};
