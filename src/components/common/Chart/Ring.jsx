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


const Ring = (props) => {
	const { id } = props;
	const [data, setData] = useState([]);
	const [color, setColor] = useState(RING_COLOR);

	useEffect(() => {
		// axios 요청은 Ring 컴포넌트가 아닌 상위에서 해야 함.
		axios({
			url: process.env.REACT_APP_CLONECOIN_API_PATH + `/wallet/leaders/${id}`, 
			method: "get",
			headers: {
			},
			data: {
				apiKey: "b77a16ccfd3a08d45193cac6b9b9264d",
				secretKey: "4e1d84ce42f01b4344ec899622d919c9",
				currency: "ALL",
			}
		}).then((response) => {
			console.log(response.data);
			setData(response.data);
			shuffle(color);
			setColor(color.slice(0, data.length + 1));
			
		}).catch((error) => {
			console.log(error);
		});
	}, []);
	
	return (
		<S.RingContainer>
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
		</S.RingContainer>
	);
}

export default Ring;
