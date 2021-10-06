import styled from 'styled-components';
import { Table as AntdTable, Badge as AntdBadge, Divider } from 'antd';

import { GOLD_COLOR } from '@assets/color';

export const Table = styled(AntdTable)`
  & thead tr th {
    position: sticky;
    top: 0;
    z-index: 2;
  }
`;

export const TableContainer = styled.div`
  position: relative;
  max-height: 500px;
  overflow: auto;
`;

export const Ribbon = styled(AntdBadge.Ribbon).attrs({
  color: GOLD_COLOR[4],
})`
  margin: 0 10px 0 0;
`;

export const DividerContainer = styled.div``;

export { Divider };
