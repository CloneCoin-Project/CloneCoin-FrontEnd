import styled from 'styled-components';
import { Layout } from 'antd';
import BithumbSilver from '@assets/images/bithumb_2.png';
import { PROJECT_TITLE } from '@assets/string';

const { Footer } = Layout;

export const LayoutPageFooter = styled(Footer)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  background: #FBFBFB;
`;

export const LogoContainer = styled.div`
  margin: 0 5px;
`;

export const LogoImage = styled.img.attrs({
  src: BithumbSilver,
  alt: PROJECT_TITLE,
})`
  height: 25px;
`;

export const InfoContainer = styled.div`
  margin: 0 5px;
`;

export const Sub = styled.span`
  font-size: 12px;
  font-weight: lighter;
  color: #AAAAAA;
`;

export const Subject = styled.span`
  font-size: 12px;
  font-weight: bolder;
  color: #AAAAAA;
`;
