import styled, { keyframes } from 'styled-components';
import { Modal as AntdModal, Button } from 'antd';
import BithumbGold from '@assets/images/bithumb_1.png';
import BithumbSilver from '@assets/images/bithumb_2.png';
import { BITHUMB_COLOR } from '@assets/color';
import { PROJECT_TITLE } from '@assets/string';

// Close Button
export const CloseEver = styled(Button)`
    background: ${ BITHUMB_COLOR [3] };
    color: ${ BITHUMB_COLOR [4] };
`;

export const CloseTemp = styled(Button)`
    min-width: 35%;
    background: ${ BITHUMB_COLOR [4] };
`;

// Coin Img
const spin = keyframes`
    from {
        transform: rotateY(0deg);
    }
    to {
        transform: rotateY(360deg);
    }
`;

export const CoinGold= styled.img.attrs({
    src: BithumbGold,
    alt: PROJECT_TITLE,
})`
    position: absolute;
    top: 0; left: 0;
    backface-visibility: hidden;
    width: 200px;
    height: 200px;
`;

export const CoinSilver= styled.img.attrs({
    src: BithumbSilver,
    alt: PROJECT_TITLE,
})`
    position: absolute;
    top: 0; left: 0;
    transform: rotateY(180deg);
    backface-visibility: hidden;
    width: 200px;
    height: 200px;
`;

export const CoinWrapper = styled.div`
    position: relative;
    margin: 0 auto;
    transition: all .4s ease;
    transform-style: preserve-3d;
    width: 200px;
    height: 200px;

    @media (prefers-reduced-motion: no-preference) {
        animation: ${ spin } infinite 5s linear;
    }
`;

export const Desc = styled.div`
    margin: 20px auto;
    text-align: center;
`;

// Modal
export const Modal = styled(AntdModal)`
    &.ant-modal {
        width: 400px !important;
    }

    .ant-modal-body {
        padding: 24px 24px 0 24px;
    }

    .ant-modal-footer {
        display: flex;
        justify-content: space-evenly;
        border-top: none;

        .ant-btn {
            margin: 0 0 20px 0;
            height: 100%;
            font-size: larger;
        }
    }
`;
