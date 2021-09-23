import * as S from '@/components/leaderportfolio/Invest/style';
import { Line } from '@components/common/Chart';
import { EARNING_RATE } from '@assets/string';

const EarningRate = () => {
	return (
		<S.Container>
			<S.Title>{ EARNING_RATE }</S.Title>
			<Line />
		</S.Container>
	);
}
  
export default EarningRate;