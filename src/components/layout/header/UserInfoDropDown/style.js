import styled from 'styled-components';
import { UserOutlined as AntdUserOutlined } from '@ant-design/icons';
import { Button as AntdButton, Dropdown, Menu } from 'antd';

export const UserOutlined = styled(AntdUserOutlined)`
  font-size: 23px;
`;

export const Button = styled(AntdButton)`
  font-size: 16px;
  font-weight: 500;
`;

export { Dropdown, Menu };
