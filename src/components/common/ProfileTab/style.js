import styled from 'styled-components';
import { Tabs as AntdTabs} from 'antd';
import { PieChartOutlined, PieChartFilled, EditOutlined, EditFilled } from '@ant-design/icons';

export const Tabs = styled(AntdTabs)`
	.ant-tabs-nav-wrap {
	}
	.ant-tabs-nav-list {
		width: 80%;
	}
	.ant-tabs-nav-list .ant-tabs-tab {
		display: flex;
		justify-content: space-evenly;
		width: 50%;
	}
`;

export const TabPane = styled(AntdTabs.TabPane)`
`;

export {
	PieChartOutlined, PieChartFilled, 
	EditOutlined, EditFilled
};