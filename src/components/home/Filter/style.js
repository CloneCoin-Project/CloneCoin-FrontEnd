import styled from 'styled-components';
import { Divider as AntdDivider } from 'antd';

import { GOLD_COLOR } from '@assets/color';

export const Divider = styled(AntdDivider)`
  & .ant-divider-inner-text {
    font-size: 1.3rem;
	font-weight: 700;
	color: ${GOLD_COLOR[2]};
	font-style: italic;
  }
`;
