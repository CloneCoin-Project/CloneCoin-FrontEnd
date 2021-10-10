import { useState } from 'react';
import * as S from '@components/home/Intro/style';
import { 
	PROJECT_TITLE, 
	INTRO_DESC_1, INTRO_DESC_2, INTRO_DESC_3, INTRO_DESC_4, 
	INTRO_CLOSE_TEMP, INTRO_CLOSE_EVER
} from '@assets/string';

const Intro = () => {
    const [isVisible, setIsVisible] = useState(true);

    // setIsVisible
    const closeModal = () => {
        setIsVisible(false);
    };

    const SetLocalStorage = () => {
        setIsVisible(false);
        localStorage.setItem('closeIntroModal', true);
    };

    return (
        <>
            { !localStorage.getItem('closeIntroModal')
            ?
                <S.Modal 
                    visible={ isVisible }
                    onCancel={ closeModal }
                    title={ PROJECT_TITLE }
                    footer={[
                        <S.CloseEver key={1} shape="round" onClick={ SetLocalStorage }>{ INTRO_CLOSE_EVER }</S.CloseEver>,
                        <S.CloseTemp key={0} shape="round" onClick={ closeModal }>{ INTRO_CLOSE_TEMP }</S.CloseTemp>
                    ]}
                >
                    <S.CoinWrapper>
                        <S.CoinGold />
                        <S.CoinSilver />
                    </S.CoinWrapper>
					<S.DescWrapper>
						<S.DescSilver>{ INTRO_DESC_1 }</S.DescSilver>
						<S.DescSilver>{ INTRO_DESC_2 }</S.DescSilver>
						<S.DescGold><S.DescTitle /> { INTRO_DESC_3 }</S.DescGold>
						<S.DescGold>{ INTRO_DESC_4 }</S.DescGold>
					</S.DescWrapper>
                </S.Modal>
            : 
                <></>
            }
        </>
    );
};

export default Intro;

