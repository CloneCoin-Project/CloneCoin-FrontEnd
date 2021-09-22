import * as S from '@/components/leaderportfolio/Invest/style';
import { INVEST_TYPE, TYPE_A, TYPE_B, TYPE_C, DAY, COUNT } from '@assets/string';

const Types = () => {
	return (
		<S.TypeGroup>
			<S.Type>
				<S.Count>5{ DAY }</S.Count>
				<S.Name>{ TYPE_A }</S.Name>
			</S.Type>
			<S.Type>
				<S.Count>20{ COUNT }</S.Count>
				<S.Name>{ TYPE_B }</S.Name>
			</S.Type>
			<S.TypeLast>
				<S.Count>50{ COUNT }</S.Count>
				<S.Name>{ TYPE_C }</S.Name>
			</S.TypeLast>
		</S.TypeGroup>
	);
}

const InvestType = () => {
	return (
		<S.Container>
			<S.Title>{ INVEST_TYPE }</S.Title>
			<Types />
		</S.Container>
	);
}
  
export default InvestType;