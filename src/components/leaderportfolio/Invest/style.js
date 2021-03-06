import styled from 'styled-components';
import { BLACK_WHITE } from '@assets/color';

export const Title = styled.h2`
`;

export const Container = styled.div`
	margin: 20px 0;
`;

// Type
export const Count = styled.h3`
`;

export const Name = styled.span`
	color: ${BLACK_WHITE[1]};
`;

export const Type = styled.div`
	width: 30%;
	text-align: center;
	border-right: 2px solid #E2E2E2;
`;

export const TypeLast = styled.div`
	width: 30%;
	text-align: center;
`;

export const TypeGroup = styled.div`
	display: flex;
	justify-content: space-around;
`;
