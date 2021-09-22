import * as S from '@/components/leaderportfolio/Invest/style';
import { Ring } from '@components/common/Chart';
import { INVEST_STATUS } from '@assets/string';

const EarningRate = () => {
	return (
		<S.Container>
			<S.Title>{ INVEST_STATUS }</S.Title>
			<Ring />
		</S.Container>
	);
}
  
export default EarningRate;