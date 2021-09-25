import styled from 'styled-components';
import { Modal as AntdModal, Slider, InputNumber as AntdInputNumber, Row as AntdRow, Col as AntdCol, Avatar as AntdAvatar } from 'antd';
import { BITHUMB_COLOR } from '@assets/color';

// ProfileMini
export const Avatar = styled(AntdAvatar)`
	position: relative;
	display: inline-block;
	margin: auto 30px;
	overflow: hidden;
`;

export const Percentage = styled.span`
	color: ${props => props.positive ? BITHUMB_COLOR[5] : BITHUMB_COLOR[6] };
	font-weight: bold;
`;

export const RightSection = styled.div`
`;

export const ProfileCard = styled.div`
	display: flex;
	flex-wrap: wrap;
	margin: 0 0 20px 0;
	width: 100%;
`;

// Slider
export const Row = styled(AntdRow)`
	display: flex;
	justify-content: space-evenly;
	flex-wrap: wrap !important;
`;

export const Col = styled(AntdCol)`

	&.ant-col-4 {
		max-width: none;
	}
`;

export const InputNumber = styled(AntdInputNumber)`
	color: #1890FF;

	&.ant-input-number-out-of-range input {
		color: #1890FF;
	}
`;

// Copy
export const Info = styled.h4`
	display: block;
	margin: 10px 0;
`;

export const ResultInfo = styled.h3`
	display: block;
	margin: 50px 0 0 0;
	text-align: center;
	color: #1890FF;
`;

export const Modal = styled(AntdModal)`
	&.ant-modal {
		width: 400px !important;
	}
	.ant-modal-body {
		padding: 24px 24px 0 24px;
	}
	.ant-modal-footer {
		text-align: center;
		border-top: none;

		.ant-btn {
			width: 50%;
			height: 100%;
			font-size: larger;
		}
	}
`;

export {
	Slider
};