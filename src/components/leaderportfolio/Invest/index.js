import EarningRate from '@/components/leaderportfolio/Invest/EarningRate';
import InvestStatus from '@/components/leaderportfolio/Invest/InvestStatus';
import InvestType from '@/components/leaderportfolio/Invest/InvestType';
import * as S from '@/components/leaderportfolio/Invest/style';

const Invest = () => {
	return (
		<S.Container>
			<EarningRate />
			<InvestStatus />
			<InvestType />
		</S.Container>
	);
}
  
export default Invest;