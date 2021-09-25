import styled from 'styled-components';
import { PieChart, Pie, Cell } from 'recharts';

export const Title = styled.h2`
`;

export const Container = styled.div`
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	flex-wrap: wrap;
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

// Basic
export {
	PieChart, Pie, 
	Cell
};