import styled from 'styled-components';
import { Layout } from 'antd';

const { Content } = Layout;

export const LayoutPageContent = styled(Content)`
  margin: 80px auto 0;
  padding: 1.24875rem 1.21875rem;
  max-width: 39rem;
  width: 100%;

  @media screen and (max-width: 480px) {
    margin: 60px auto 0;
  }
`;
