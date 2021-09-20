import styled from 'styled-components';
import { Drawer as AntdDrawer, Table } from 'antd';

export const IconContainer = styled.div``;

export const Drawer = styled(AntdDrawer)`
  & .ant-drawer-body {
    padding: 0px;
  }

  & .ant-drawer-title {
    color: #E48701;
    font-size: 18px;
  }
`;

export { Table };
