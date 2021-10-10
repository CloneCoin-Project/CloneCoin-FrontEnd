import styled from 'styled-components';
import { Input, Button as AntdButton, Divider, message } from 'antd';

import { EditOutlined } from '@ant-design/icons';

const { TextArea } = Input;

export const NormalButton = styled(AntdButton)``;

export const Button = styled(AntdButton)`
  color: ${(props) => (props.color ? props.color : 'inherit')};
  border: none;
  padding: 0 15px;
  height: 28px;
  &:hover,
  &:focus {
    background: inherit;
    color: #1890ff;
  }
`;

export const DividerContent = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

export const DescriptionContainer = styled.div``;

export const DescriptionContent = styled.div``;

export { EditOutlined, Divider, message, TextArea };
