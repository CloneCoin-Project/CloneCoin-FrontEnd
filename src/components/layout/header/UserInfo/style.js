import styled from 'styled-components';
import { Card as AntdCard, Avatar } from 'antd';

const { Meta } = AntdCard;

export const Card = styled(AntdCard)`
  width: 300px;
  padding: 0px;

  @media screen and (max-width: 480px) {
	min-width: 50px;
	max-width: 250px;
  }
`;

export { Meta, Avatar };
