import styled from 'styled-components';
import {
  Avatar,
  Modal as AntdModal,
  Form,
  Input,
  Card as AntdCard,
  Button as AntdButton,
  Row,
  Col,
  Divider,
  Popconfirm,
  message,
} from 'antd';

import {
  UserOutlined,
} from '@ant-design/icons';

const { Grid } = AntdCard;
const { TextArea } = Input;

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
  padding: 15px;
  font-size: 18px;
`;

export const CopyFollowContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NormalButton = styled(AntdButton)``;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 5px;
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

export const _Col = styled(Col)`
  padding: 10px 0;
`;

export const _Row = styled(Row)`
  padding: 10px 0 0 0;
`;

export const BalanceHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: 15px;
  height: 28px;
`;

export const BalanceContent = styled.div`
  display: flex;
  justify-content: space-around;
  font-size: 15px;
  height: 28px;
`;

export const DividerContent = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

export const PortfolioHeader = styled.h2`
  margin: 35px 0 0 0;
`;

export const LineChartContainer = styled.div`
  width: 100%;
  height: 300px;
  margin: 2rem 0;
`;

export {
  UserOutlined,
  Avatar,
  Row,
  Col,
  Divider,
  Popconfirm,
  message,
  Form,
  Input,
  TextArea,
};
