import { useState, useCallback } from 'react';
import { useModal, useUserData, usePortfolioData } from '@hooks';

import { stringFormat, insertCommaToNumber } from '@/utils/stringFormat';
import { COPY_TITLE, COPY_VOLUME, CURRENT_MONEY, COPY_RESULT, COPY_BUTTON } from '@assets/string';

import ProfileMini from '@components/modal/Copy/ProfileMini';
import Slider from '@components/modal/Copy/Slider';
import { CopyButton } from '@/components/common/ProfileHeader/style';
import * as S from '@components/modal/Copy/style';

const value = {
	AVERAGE_EARNING: 60.1,
	EARNING_BEST: 200.1,
	COPY_VOLUME: 40,
}

const Copy = (props) => {
	const { triggerButton } = props;

	const { isModalVisible, handleToggle, setIsModalVisible } = useModal();
	const { ID, isLogged, userStatus } = useUserData();
	const { startCopy, copyLeaderSelectorLoading, normalUserBalance } = usePortfolioData();

	const [inputPercent, setInputPercent] = useState(1);

	const onFinished = useCallback(() => {
		if (!normalUserBalance) {
			return S.message.error('잔액이 0원입니다.');
		}

		startCopy({
			copyRequest: {
				userId: ID,
				leaderId,
				leaderName,
				amount: normalUserBalance * inputPercent / 100,
			},
			onSuccess: () => {
			// onSuccess: (leaderName, amount) => {
				S.message.success('카피를 완료했습니다.');
				// S.message.success(`리더 ${leaderName}님의 투자를 ${amount} 원 만큼 카피했습니다.`);
				setInputPercent(1);
				setIsModalVisible(false);
			},
			onFailure: () => {
				S.message.error('에러가 발생하였습니다.');
			},
		}, []);
	})

	const onChange = value => {
		setInputPercent(value);
	};

	const rejectModal = () => {
		if (!isLogged) {
			return S.message.error('로그인이 필요한 서비스입니다.');
		}
		return S.message.error('일반 유저만 이용할 수 있는 서비스입니다.');
	}

	return (
		<>
			<S.Trigger onClick={ (!isLogged | userStatus != 'leader') ? handleToggle : rejectModal }>{ triggerButton }</S.Trigger>
			<S.Modal 
				title={ COPY_TITLE } visible={ isModalVisible } 
				onCancel={ handleToggle }
				footer={[
					<CopyButton key="back" type="primary" shape="round" loading={ copyLeaderSelectorLoading } onClick={ onFinished }>{ COPY_BUTTON }</CopyButton>
				]}
			>
				<ProfileMini value={ value } />
				<S.Info>{ stringFormat(CURRENT_MONEY, insertCommaToNumber(normalUserBalance)) }</S.Info>
				<S.Info>{ COPY_VOLUME }</S.Info>
				<Slider inputValue={ inputPercent } onChange={ onChange }/>
				<S.ResultInfo>{ stringFormat(COPY_RESULT, insertCommaToNumber(normalUserBalance * inputPercent / 100)) }</S.ResultInfo>
			</S.Modal>
		</>
	)
}

export default Copy;