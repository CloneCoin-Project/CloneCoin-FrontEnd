import * as S from '@/components/common/Chart/style';
import { LINE_COLOR, BITHUMB_COLOR } from '@assets/color';
import { LineChart, Line as Lines, Tooltip, XAxis, YAxis, CartesianGrid, Legend } from 'recharts';

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

const Line = () => {
    return (
		<S.Container>
			<LineChart
				width={500}
				height={300}
				data={data}
				margin={{ top: 5, right: 30, left: 20, bottom: 5, }}
			>
				<CartesianGrid strokeDasharray="3 3" />
				<XAxis dataKey="date" />
				<YAxis domain={[-100, 200]}/>
				<Tooltip />
				<Legend />
				<Lines type="monotone" dataKey="percent" stroke={BITHUMB_COLOR[0]} activeDot={{ r: 8 }} />
			</LineChart>
		</S.Container>
    );
}

export default Line;