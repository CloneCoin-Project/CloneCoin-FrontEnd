import * as S from '@components/home/Intro/style';
import { PROJECT_TITLE, INTRO_DESC, INTRO_CLOSE_TEMP, INTRO_CLOSE_EVER } from '@assets/string';

const Intro = () => {
	return (
		<S.Modal 
				title={ PROJECT_TITLE }
				footer={[
					<S.CloseEver key={1} shape="round">{ INTRO_CLOSE_EVER }</S.CloseEver>,
					<S.CloseTemp key={0} shape="round">{ INTRO_CLOSE_TEMP }</S.CloseTemp>
				]}
			>
				<S.CoinWrapper>
					<S.CoinGold />
					<S.CoinSilver />
				</S.CoinWrapper>
				<S.Desc>{ INTRO_DESC }</S.Desc>
		</S.Modal>
	);
};

export default Intro;
