import styled from 'styled-components';

import BitCoinPng from '@assets/images/bitcoin.png';
import { ICON_BITCOIN } from '@assets/string';

export const Icon = styled.img.attrs({
  src: BitCoinPng,
  alt: ICON_BITCOIN,
})`
  height: 32px;
  max-width: 100%;
  max-height: 100%;
  cursor: pointer;
`;

export const BitcoinIcon = styled(Icon).attrs({
  src: BitCoinPng,
  alt: ICON_BITCOIN,
})``;
