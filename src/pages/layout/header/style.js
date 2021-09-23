import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Layout } from 'antd';

import LogoPng from '@assets/images/logo.png';
import { PROJECT_TITLE } from '@assets/string';

const { Header } = Layout;

export const LayoutPageHeader = styled(Header)`
  position: fixed;
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 8px #f0f1f2;
  background-color: #ffffff;
  z-index: 2;
  @media screen and (max-width: 480px) {
    padding: 0 20px;
  }
`;

export const LogoContainer = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
  gap: 10px;
`;

export const LogoImage = styled.img.attrs({
  src: LogoPng,
  alt: PROJECT_TITLE,
})`
  height: 32px;
  max-width: 100%;
  max-height: 100%;
`;

export const LogoTitle = styled.span.attrs({
  title: PROJECT_TITLE,
})`
  font-size: 19px;
  font-weight: 700;
  color: #e48701;
  white-space: nowrap;
  &::before {
    content: attr(title);
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
  gap: 10px;
`;
