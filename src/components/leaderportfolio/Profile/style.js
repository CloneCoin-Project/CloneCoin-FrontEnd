import styled from 'styled-components';
import { Row,Col, Avatar, Divider, Button as AntdButton } from 'antd';

import {
  UserOutlined,
} from '@ant-design/icons';

export const NickNameContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 15px;
  font-size: 18px;
`;

export const CopyFollowContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CopyButton = styled(AntdButton)`
  width: 120px;
`;

export const Button = styled(AntdButton)`
  color: ${(props) => (props.color ? props.color : 'inherit')};
  border: none;
  padding: 3px 15px 0;
  height: 28px;
  &:hover,
  &:focus {
    background: inherit;
    color: #1890ff;
  }
`;

export { Row, Col, Divider, Avatar, UserOutlined };
