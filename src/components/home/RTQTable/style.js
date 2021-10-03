import styled from 'styled-components';
import { Table as AntdTable, Badge as AntdBadge, } from 'antd';

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

export const Ribbon = styled(AntdBadge.Ribbon)`
  margin: 0 10px 0 0;
`;

export const DividerContainer = styled.div`
`;
