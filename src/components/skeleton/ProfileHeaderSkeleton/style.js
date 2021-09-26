import styled from 'styled-components';
import { Skeleton as AntdSkeleton, Card as AntdCard } from 'antd';

export const Skeleton = styled(AntdSkeleton)`
  margin-top: 16px;
`;

export const Card = styled(AntdCard)`
  width: 39rem;
  margin-bottom: 24px;
  border: 1px solid #ffffff;
`;