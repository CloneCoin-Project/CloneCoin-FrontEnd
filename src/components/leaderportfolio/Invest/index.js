import EarningRate from '@/components/leaderportfolio/Invest/EarningRate';
import InvestStatus from '@/components/leaderportfolio/Invest/InvestStatus';
import InvestStyle from '@/components/leaderportfolio/Invest/InvestStyle';
import * as S from '@/components/leaderportfolio/Invest/style';

const Invest = () => {
	return (
		<S.Container>
			<EarningRate />
			<InvestStatus />
			<InvestStyle />
		</S.Container>
	);
}
  
export default Invest;