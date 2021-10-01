import styled from 'styled-components';
import { Modal as AntdModal, Button } from 'antd';
import BithumbGold from '@assets/images/bithumb_1.png';
import BithumbSilver from '@assets/images/bithumb_2.png';
import { BITHUMB_COLOR } from '@assets/color';
import { PROJECT_TITLE } from '@assets/string';

// Desc
export const Desc = styled.div`
`;

// Close Button
export const CloseEver = styled(Button)`
	background: ${ BITHUMB_COLOR [3] };
	color: ${ BITHUMB_COLOR [4] };
`;

export const CloseTemp = styled(Button)`
	background: ${ BITHUMB_COLOR [4] };
`;

// Coin Img
export const CoinGold= styled.img.attrs({
	src: BithumbGold,
	alt: PROJECT_TITLE,
})`
`;

export const CoinSilver= styled.img.attrs({
	src: BithumbSilver,
	alt: PROJECT_TITLE,
})`
`;

export const CoinWrapper = styled.div`
`;

// Modal
export const Modal = styled(AntdModal)`
`;