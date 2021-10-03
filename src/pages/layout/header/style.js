import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
import { Layout } from 'antd';

import BithumbGold from '@assets/images/bithumb_1.png';
import { PROJECT_TITLE } from '@assets/string';

const neon = keyframes`
	0%,
	100% {
		text-shadow: 0 0 9px #EDC967, 0 0 9px #EDC967, 0 0 19px #EDC967, 0 0 3px #EDC967, 9px 1px 1px #FFFFFF;
		color: #D2AC47;
	}
	50% {
		text-shadow: 0 0 9px #E8D5A3, 0 0 9px #E8D5A3, 0 0 9px #E8D5A3, 0 0 3px #E8D5A3, 9px 1px 1px #FFFFFF;
		color: #BD9A3F;
	}
`;

const { Header } = Layout;

export const LayoutPageHeader = styled(Header)`
  position: fixed;
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 8px #f0f1f2;
  background-color: #ffffff;
  z-index: 2;
  @media screen and (max-width: 480px) {
    padding: 0 20px;
	height: 60px;
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
  src: BithumbGold,
  alt: PROJECT_TITLE,
})`
  height: 36px;
  max-width: 100%;
  max-height: 100%;
`;

export const LogoTitle = styled.span.attrs({
  title: PROJECT_TITLE,
})`
  font-size: 24px;
  font-weight: 700;
  font-style: italic;
  color: #AE8625;
  animation: ${ neon } infinite 4s linear;

  &::before {
    content: attr(title);
  }

  @media screen and (max-width: 480px) {
    font-size: 20px;
  }

  @media screen and (max-width: 380px) {
    font-size: 16px;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
  gap: 10px;
`;
