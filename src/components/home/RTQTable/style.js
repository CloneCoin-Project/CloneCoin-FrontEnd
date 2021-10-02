import styled from 'styled-components';
import { Table as AntdTable } from 'antd';

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