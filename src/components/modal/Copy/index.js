import { useState, useCallback } from 'react';
import { useModal, useUserData, usePortfolioData } from '@hooks';

import { stringFormat, insertCommaToNumber } from '@/utils/stringFormat';
import { 
	STATUS_LEADER,
	COPY_TITLE, COPY_CHANGE_TITLE, 
	CHANGE_TAB_ADD, CHANGE_TAB_WITHDRAW, COPY_TYPE_PLUS, COPY_TYPE_MINUS, 
	CURRENT_VOLUME, COPY_VOLUME, CURRENT_MONEY, CURRENT_COPY, 
	COPY_RESULT, COPY_ADD_RESULT, COPY_WITHDRAW_RESULT,
	COPY_BUTTON, COPY_ADD_BUTTON, COPY_WITHDRAW_BUTTON,
} from '@assets/string';

import ProfileMini from '@components/modal/Copy/ProfileMini';
import { Slider, SliderReverse } from '@components/modal/Copy/Slider';
import { CopyButton, CopyChangeButton } from '@/components/common/ProfileHeader/style';
import * as S from '@components/modal/Copy/style';

const Copy = (props) => {
	const { triggerButton, leaderId, leaderName, leaderEarningRate, leaderEarningBest } = props;

	const { isModalVisible, handleToggle, setIsModalVisible } = useModal();
	const { ID, isLogged, userStatus } = useUserData();
	const { startCopy, changeCopy, copyLeaderSelectorLoading, changeCopyLeaderSelectorLoading, normalUserBalance, currentCopyingLeaders } = usePortfolioData();

	const [inputPercentPlus, setInputPercentPlus] = useState(1);
	const [inputPercentMinus, setInputPercentMinus] = useState(-1);

	const onChange = useCallback(value => {
		(value > 0) ? setInputPercentPlus(value) : setInputPercentMinus(value);
	});

	const rejectModal = () => {
		if (!isLogged) {
			return S.message.error('로그인이 필요한 서비스입니다.');
		}
		return S.message.error('일반 유저만 이용할 수 있는 서비스입니다.');
	}

	const submitFinish = useCallback(() => {
		if (!normalUserBalance) {
			return S.message.error('잔액이 0원입니다.');
		}

		startCopy({
			copyRequest: {
				userId: ID,
				leaderId,
				leaderName,
				amount: normalUserBalance * inputPercentPlus / 100,
			},
			onSuccess: () => {
				S.message.success('카피를 완료했습니다.');
				setInputPercentPlus(1);
				setIsModalVisible(false);
			},
			onFailure: () => {
				S.message.error('에러가 발생하였습니다.');
			},
		}, []);
	})

	const submitChange = useCallback((type, inputPercent) => {
		if (!normalUserBalance) {
			return S.message.error('잔액이 0원입니다.');
		}

		changeCopy({
			changeCopyRequest: {
				userId: ID,
				leaderId,
				type,
				amount: normalUserBalance * inputPercent / 100,
			},
			onSuccess: () => {
				S.message.success('카피금액 변경을 완료했습니다.');
				setInputPercentPlus(1);
				setInputPercentMinus(-1);
				setIsModalVisible(false);
			},
			onFailure: () => {
				S.message.error('에러가 발생하였습니다.');
			},
		}, []);
	})

	return (
		<>
			<S.Trigger onClick={ (isLogged && userStatus != STATUS_LEADER) ? handleToggle : rejectModal }>{ triggerButton }</S.Trigger>
			
			{ (currentCopyingLeaders.includes(leaderId))
			?
				<S.Modal
					title={ COPY_CHANGE_TITLE } visible={ isModalVisible } 
					onCancel={ handleToggle }
					footer={[]}
				>
					<ProfileMini leaderEarningRate={ leaderEarningRate } leaderEarningBest={ leaderEarningBest }/>
					<S.Tabs defaultActiveKey="1" centered>
						<S.TabPane tab={ CHANGE_TAB_ADD } key="1">
							<S.Info>{ stringFormat(CURRENT_COPY, insertCommaToNumber(normalUserBalance)) }</S.Info>
							<S.Info>{ stringFormat(CURRENT_MONEY, insertCommaToNumber(normalUserBalance)) }</S.Info>
							<S.Info>{ CURRENT_VOLUME }</S.Info>
							<Slider inputValue={ inputPercentPlus } onChange={ onChange }/>
							<S.ResultInfo>{ stringFormat(COPY_ADD_RESULT, insertCommaToNumber(normalUserBalance * inputPercentPlus / 100)) }</S.ResultInfo>
							<CopyChangeButton key="back" type="primary" shape="round" loading={ changeCopyLeaderSelectorLoading } onClick={ () => submitChange(COPY_TYPE_PLUS, inputPercentPlus) }>{ COPY_ADD_BUTTON }</CopyChangeButton>
						</S.TabPane>

						<S.TabPane tab={ CHANGE_TAB_WITHDRAW } key="2">
							<S.Info>{ stringFormat(CURRENT_COPY, insertCommaToNumber(normalUserBalance)) }</S.Info>
							<S.Info>{ COPY_VOLUME }</S.Info>
							<SliderReverse inputValue={ inputPercentMinus } onChange={ onChange }/>
							<S.ResultInfo>{ stringFormat(COPY_WITHDRAW_RESULT, insertCommaToNumber(normalUserBalance), insertCommaToNumber(normalUserBalance * inputPercentMinus / 100), inputPercentMinus) }</S.ResultInfo>
							<CopyChangeButton key="back" type="primary" shape="round" loading={ changeCopyLeaderSelectorLoading } onClick={ () => submitChange(COPY_TYPE_MINUS, inputPercentMinus * (-1)) }>{ COPY_WITHDRAW_BUTTON }</CopyChangeButton>
						</S.TabPane>
					</S.Tabs>
				</S.Modal>
			:
				<S.Modal
					title={ COPY_TITLE } visible={ isModalVisible } 
					onCancel={ handleToggle }
					footer={[
						<CopyButton key="back" type="primary" shape="round" loading={ copyLeaderSelectorLoading } onClick={ submitFinish }>{ COPY_BUTTON }</CopyButton>
					]}q
				>
					<ProfileMini leaderEarningRate={ leaderEarningRate } leaderEarningBest={ leaderEarningBest }/>
					<S.Info>{ stringFormat(CURRENT_MONEY, insertCommaToNumber(normalUserBalance)) }</S.Info>
					<S.Info>{ CURRENT_VOLUME }</S.Info>
					<Slider inputValue={ inputPercentPlus } onChange={ onChange }/>
					<S.ResultInfo>{ stringFormat(COPY_RESULT, insertCommaToNumber(normalUserBalance * inputPercentPlus / 100)) }</S.ResultInfo>
				</S.Modal>
			}
		</>
	)
}

export default Copy;