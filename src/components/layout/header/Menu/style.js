import styled from 'styled-components';
import {
  Modal as AntdModal,
  Button as AntdButton,
  Form,
  Input,
  Checkbox,
} from 'antd';
import { MailTwoTone, LockTwoTone } from '@ant-design/icons';

export const Button = styled(AntdButton)`
  font-size: 16px;
  font-weight: 600;
`;

export const LoginButton = styled(AntdButton)``;

export const LinkButton = styled(Button)`
  color: rgba(0, 0, 0, 0.85);
`;

export const Modal = styled(AntdModal)`
  & .ant-modal-header {
    text-align: center;
  }
`;

export const LoginFormContainer = styled.div``;

export { MailTwoTone, LockTwoTone, Form, Input, Checkbox };
