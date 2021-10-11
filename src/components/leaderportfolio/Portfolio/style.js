import styled from 'styled-components';
import { Divider, Row, Button as AntdButton } from 'antd';

export const PortfolioHeader = styled.h2`
	margin: 35px 0 0 0;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 5px;
`;

export const NormalButton = styled(AntdButton)``;

export { Row, Divider };
