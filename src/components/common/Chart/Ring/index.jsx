import { useEffect, useState } from 'react';
import * as S from '@/components/common/Chart/style';
import { RING_COLOR } from '@assets/color';
import { shuffle } from '@utils/random';
import axios from 'axios';

const RingDetail = ({ data, color }) => {
	const [detail, setDetail] = useState([]);

	useEffect(() => {
		// setDetail
		let result = [];
		let sum = data.reduce(function (accumulator, currentValue) {
			return accumulator + currentValue.value;
		}, 0)

		for (let i=0; i<data.length; i++) {
			result.push({ ...data[i], percentage: (data[i].value / sum * 100).toFixed(2) + '%', color: color[i] })
		}
		setDetail(result);
		
	}, [data, color]);

	return (
		<S.DetailContainer>
			{ detail.map(
				(item, i) => 
				<S.Detail key={i}>
					<S.SmallCircle color={item.color} />
					<S.Name>{item.name} {item.percentage}</S.Name>
				</S.Detail> ) 
			}
		</S.DetailContainer>
	);
}


const Ring = () => {
	const [data, setData] = useState([
		{ name: 'Group A', value: 400 },
		{ name: 'Group B', value: 300 },
		{ name: 'Group C', value: 300 },
		{ name: 'Group D', value: 200 },
	]);
	const [color, setColor] = useState(RING_COLOR);

	useEffect(() => {
	}, []);
	
	return (
		<S.Container>
			<S.PieChart width={200} height={200}>
				<S.Pie
					data={data}
					innerRadius={40}
					outerRadius={80}
					paddingAngle={0}
					startAngle={90}
					endAngle={450}
				>
					{data.map((entry, index) => (
						<S.Cell key={`cell-${index}`} fill={color[index % color.length]} />
					))}
				</S.Pie>
			</S.PieChart>
			<RingDetail data={data} color={color} style={{width:"400px"}}/>
		</S.Container>
	);
}

export default Ring;
