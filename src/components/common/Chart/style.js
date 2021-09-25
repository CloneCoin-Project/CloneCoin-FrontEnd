import styled from 'styled-components';
import { 
	ResponsiveContainer as RechartsResponsiveContainer, LineChart as RechartsLineChart, Line as Lines,   // Line
	Tooltip, XAxis, YAxis, CartesianGrid, Legend,    // Line
	PieChart, Pie, Cell   // Ring 
} from 'recharts';

// Line
export const LineChart = styled(RechartsLineChart)`
`;

export const ResponsiveContainer = styled(RechartsResponsiveContainer)`
	&.recharts-responsive-container {
		max-width: 600px;
		max-height: 400px;
		min-width: 90px;
		min-height: 300px;
	}
`;

// RingDetail
export const DetailContainer = styled.div`
`;

export const Detail = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	width: 150px;
`;

export const SmallCircle = styled.div`
	margin: 0 10px 0 0;
	width: 5px;
	height: 5px;
	border-radius: 50%;
	background-color: ${props => props.color};
`;

export const Name = styled.span`
`;

// Container
export const Title = styled.h2`
`;

export const Container = styled.div`
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	flex-wrap: wrap;
`;

// Basic
export {
	Tooltip, Lines, XAxis, YAxis, CartesianGrid, Legend,
	PieChart, Pie, 
	Cell
};