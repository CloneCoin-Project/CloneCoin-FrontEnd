import React from 'react';
import * as S from '@components/common/Icon/style';

const iconMap = {
  bitcoin: S.BitcoinIcon,
};

const Icon = ({ name }) => {
  return React.createElement(iconMap[name], null);
};

export default Icon;
