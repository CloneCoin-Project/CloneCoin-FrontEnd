import { useState, useCallback } from 'react';
import { useModal, useUserData, usePortfolioData } from '@hooks';

import { stringFormat, insertCommaToNumber } from '@/utils/stringFormat';
import { 
	COPY_TITLE, COPY_CHANGE_TITLE, 
	CHANGE_TAB_ADD, CHANGE_TAB_WITHDRAW,
	CURRENT_VOLUME, COPY_VOLUME, CURRENT_MONEY, CURRENT_COPY, 
	COPY_RESULT, COPY_ADD_RESULT, COPY_WITHDRAW_RESULT,
	COPY_BUTTON, COPY_CHANGE_BUTTON 
} from '@assets/string';

import ProfileMini from '@components/modal/Copy/ProfileMini';
import { Slider, SliderReverse } from '@components/modal/Copy/Slider';
import { CopyButton, CopyChangeButton } from '@/components/common/ProfileHeader/style';
import * as S from '@components/modal/Copy/style';

const Copy = (props) => {
	const { triggerButton, leaderId, leaderName, leaderEarningRate, leaderEarningBest } = props;

	const { isModalVisible, handleToggle, setIsModalVisible } = useModal();
	const { ID, isLogged, userStatus } = useUserData();
	const { startCopy, copyLeaderSelectorLoading, normalUserBalance, currentCopyingLeaders } = usePortfolioData();

	const [inputPercentAdd, setInputPercentAdd] = useState(1);
	const [inputPercentWithDraw, setInputPercentWithDraw] = useState(-1);

	const onFinished = useCallback(() => {
		if (!normalUserBalance) {
			return S.message.error('잔액이 0원입니다.');
		}

		startCopy({
			copyRequest: {
				userId: ID,
				leaderId,
				leaderName,
				amount: normalUserBalance * inputPercentAdd / 100,
			},
			onSuccess: () => {
			// onSuccess: (leaderName, amount) => {
				S.message.success('카피를 완료했습니다.');
				// S.message.success(`리더 ${leaderName}님의 투자를 ${amount} 원 만큼 카피했습니다.`);
				setInputPercentAdd(1);
				setIsModalVisible(false);
			},
			onFailure: () => {
				S.message.error('에러가 발생하였습니다.');
			},
		}, []);
	})

	const onChange = useCallback(value => {
		(value > 0) ? setInputPercentAdd(value) : setInputPercentWithDraw(value);
	});

	const rejectModal = () => {
		if (!isLogged) {
			return S.message.error('로그인이 필요한 서비스입니다.');
		}
		return S.message.error('일반 유저만 이용할 수 있는 서비스입니다.');
	}

	return (
		<>
			<S.Trigger onClick={ (!isLogged | userStatus != 'leader') ? handleToggle : rejectModal }>{ triggerButton }</S.Trigger>
			
			{ (currentCopyingLeaders.includes(leaderId))
			?
				<S.Modal
					title={ COPY_CHANGE_TITLE } visible={ isModalVisible } 
					onCancel={ handleToggle }
					footer={[
						<CopyChangeButton key="back" type="primary" shape="round" loading={ copyLeaderSelectorLoading } onClick={ onFinished }>{ COPY_CHANGE_BUTTON }</CopyChangeButton>
					]}
				>
					<ProfileMini leaderEarningRate={ leaderEarningRate } leaderEarningBest={ leaderEarningBest }/>
					<S.Tabs defaultActiveKey="1" centered>
						<S.TabPane tab={ CHANGE_TAB_ADD } key="1">
							<S.Info>{ stringFormat(CURRENT_COPY, insertCommaToNumber(normalUserBalance)) }</S.Info>
							<S.Info>{ stringFormat(CURRENT_MONEY, insertCommaToNumber(normalUserBalance)) }</S.Info>
							<S.Info>{ CURRENT_VOLUME }</S.Info>
							<Slider inputValue={ inputPercentAdd } onChange={ onChange }/>
							<S.ResultInfo>{ stringFormat(COPY_ADD_RESULT, insertCommaToNumber(normalUserBalance * inputPercentAdd / 100)) }</S.ResultInfo>

						</S.TabPane>

						<S.TabPane tab={ CHANGE_TAB_WITHDRAW } key="2">
							<S.Info>{ stringFormat(CURRENT_COPY, insertCommaToNumber(normalUserBalance)) }</S.Info>
							<S.Info>{ COPY_VOLUME }</S.Info>
							<SliderReverse inputValue={ inputPercentWithDraw } onChange={ onChange }/>
							<S.ResultInfo>{ stringFormat(COPY_WITHDRAW_RESULT, insertCommaToNumber(normalUserBalance), insertCommaToNumber(normalUserBalance * inputPercentWithDraw / 100), inputPercentWithDraw) }</S.ResultInfo>
						</S.TabPane>
					</S.Tabs>
				</S.Modal>
			:
				<S.Modal
					title={ COPY_TITLE } visible={ isModalVisible } 
					onCancel={ handleToggle }
					footer={[
						<CopyButton key="back" type="primary" shape="round" loading={ copyLeaderSelectorLoading } onClick={ onFinished }>{ COPY_BUTTON }</CopyButton>
					]}
				>
					<ProfileMini leaderEarningRate={ leaderEarningRate } leaderEarningBest={ leaderEarningBest }/>
					<S.Info>{ stringFormat(CURRENT_MONEY, insertCommaToNumber(normalUserBalance)) }</S.Info>
					<S.Info>{ CURRENT_VOLUME }</S.Info>
					<Slider inputValue={ inputPercentAdd } onChange={ onChange }/>
					<S.ResultInfo>{ stringFormat(COPY_RESULT, insertCommaToNumber(normalUserBalance * inputPercentAdd / 100)) }</S.ResultInfo>
				</S.Modal>
			}
		</>
	)
}

export default Copy;