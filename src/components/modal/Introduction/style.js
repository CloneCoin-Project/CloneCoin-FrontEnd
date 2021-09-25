import styled from 'styled-components';
import { Modal as AntdModal, Button as AntdButton, Comment, Form as AntdForm, Input as AntdInput } from 'antd';

export const Input = styled(AntdInput)`
	&.ant-input {
		height: 100px;
	}
`;

export const Form = styled(AntdForm.Item)`
`;

export const ConfirmButton = styled(AntdButton)`
`;

export const Modal = styled(AntdModal)`
	&.ant-modal {
		width: 400px !important;
	}
	.ant-modal-body .ant-comment-inner {
		padding: 0;
		.ant-row.ant-form-item {
			margin: 0;
		}
	}
	.ant-modal-footer {
		text-align: center;
		border-top: none;

		.ant-btn {
			margin: 0 0 20px 0;
			width: 50%;
			height: 100%;
			font-size: larger;
		}
	}
`;

export {
	Comment
};