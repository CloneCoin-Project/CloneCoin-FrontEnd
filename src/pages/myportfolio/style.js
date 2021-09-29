import styled from 'styled-components';
import { Card as AntdCard } from 'antd';

export const UserCardWrapper = styled(AntdCard)`
  & .ant-card-body {
    padding: 12px 24px;
  }
  cursor: inherit;
`;
