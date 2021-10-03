import styled from 'styled-components';
import { UserOutlined as AntdUserOutlined } from '@ant-design/icons';
import { Button as AntdButton, Dropdown, Menu } from 'antd';

const { Item } = Menu;

export const MenuItem = styled(Item).attrs({
  style: {
    cursor: 'unset',
  },
})``;

export const UserOutlined = styled(AntdUserOutlined)`
  font-size: 23px;
`;

export const Button = styled(AntdButton)`
  font-size: 16px;
  font-weight: 500;

  @media screen and (max-width: 480px) {
	span:last-child {
		display: none;
	}
  }
`;

export { Dropdown, Menu };
