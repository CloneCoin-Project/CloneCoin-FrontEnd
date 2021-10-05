import styled from 'styled-components';
import {
  Avatar,
  Modal as AntdModal,
  Form,
  Input,
  Card as AntdCard,
  Badge as AntdBadge,
  Button as AntdButton,
  Row,
  Col,
  Divider,
  Table,
  Popconfirm,
  message,
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

export const LeaderRegisterButton = styled(AntdButton)``;

export const Modal = styled(AntdModal)`
  & .ant-modal-header {
    text-align: center;
  }
`;

export const Badge = styled(AntdBadge)``;

export const BalanceHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: 16px;
  height: 28px;
`;

export const DescriptionContainer = styled.div``;

export const DescriptionContent = styled.div``;

export const PortfolioHeader = styled.h2``;

export const YieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 16px;
`;

export const YieldHeader = styled.div``;

export const YieldContent = styled.div``;

export const LineChartContainer = styled.div`
  width: 100%;
  height: 300px;
  margin: 2rem 0;
`;

export const PieChartContainer = styled.div`
  width: 100%;
  height: 300px;
  margin: 0 0 2rem;
`;

export const TableContainer = styled.div`
  width: 100%;
  margin: 2rem 0;
`;

export {
  NotificationOutlined,
  UserOutlined,
  Avatar,
  Meta,
  Row,
  Col,
  Divider,
  Table,
  Popconfirm,
  message,
  Form,
  Input,
};
