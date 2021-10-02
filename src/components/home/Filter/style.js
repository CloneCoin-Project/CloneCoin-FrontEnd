import styled from 'styled-components';
import { Divider as AntdDivider } from 'antd';

export const Divider = styled(AntdDivider)`
  & .ant-divider-inner-text {
    font-size: 1.3rem;
	font-weight: 700;
	color: #D2AC47;
	font-style: italic;
  }
`;
