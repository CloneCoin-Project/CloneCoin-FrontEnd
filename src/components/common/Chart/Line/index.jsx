import { useState, useEffect } from 'react';
import { RATE_1DAY, RATE_7DAYS, RATE_30DAYS } from '@assets/string';
import * as S from '@/components/common/Chart/style';
import { BITHUMB_COLOR } from '@assets/color';

const data = [
	{
		date: '20210921',
		percent: 100,
	},
	{
		date: '20210922',
		percent: 1,
	},
	{
		date: '20210923',
		percent: 12,
	},
	{
		date: '20210924',
		percent: 35,
	},
	{
		date: '20210925',
		percent: -35,
	},
	{
		date: '20210926',
		percent: 0,
	},
	{
		date: '20210927',
		percent: 40,
	},
];

const ButtonSet = () => {
	return (
		<S.ButtonContainer>
			<S.Button shape="round">{ RATE_1DAY }</S.Button>
			<S.Button shape="round">{ RATE_7DAYS }</S.Button>
			<S.Button shape="round">{ RATE_30DAYS }</S.Button>
		</S.ButtonContainer>
	);
}

const Line = () => {
    return (
		<S.Container>
			<ButtonSet/>
			<S.ResponsiveContainer
				width="90%" height="90%"
			>
				<S.LineChart
					data={ data }
				>
					<S.CartesianGrid strokeDasharray="3 3" />
					<S.XAxis dataKey="date" />
					<S.YAxis domain={ [-100, 200] }/>
					<S.Legend />
					<S.Tooltip />
					<S.Lines type="monotone" dataKey="percent" stroke={ BITHUMB_COLOR[0] } activeDot={{ r: 8 }} />
				</S.LineChart>
			</S.ResponsiveContainer>
		</S.Container>
    );
}

export default Line;