import styled from 'styled-components';
import { Card as AntdCard, Avatar, Tag } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const { Meta } = AntdCard;

export const Card = styled(AntdCard)`
  width: 300px;
  padding: 0px;

  @media screen and (max-width: 480px) {
    min-width: 50px;
    max-width: 250px;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Paragraph = styled.p`
  margin: 0;
`;

export { Meta, Avatar, UserOutlined, Tag };
