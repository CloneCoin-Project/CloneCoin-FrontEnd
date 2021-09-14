import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Layout } from 'antd';

const { Header } = Layout;

export const LayoutPageHeader = styled(Header)`
  position: fixed;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1;
  box-shadow: 0 2px 8px #f0f1f2;
`;

export const LogoContainer = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
  img {
    max-width: 100%;
    max-height: 100%;
  }
`;
