import styled from 'styled-components';
import { List, Avatar, Space, Card as AntdCard } from 'antd';
import { LikeOutlined, StarOutlined } from '@ant-design/icons';

const { Meta, Grid } = AntdCard;

export const OuterCard = styled(AntdCard)`
  & .ant-card-actions {
    border: none;
  }
`;

export const InnerCard = styled(AntdCard)``;

export const CardGrid = styled(Grid).attrs({
  hoverable: false,
})`
  width: 50%;
  padding: 0px;
`;

export { List, Avatar, Space, LikeOutlined, StarOutlined, Meta };
