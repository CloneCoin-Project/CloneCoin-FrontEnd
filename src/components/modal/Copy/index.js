import { useState } from 'react';
import { useModal } from '@hooks';

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
	CURRENT_MONEY: 500000,
	COPY_RESULT: 200000
}

const Copy = (props) => {

	const { triggerButton, onClick } = props;

	const { isModalVisible, handleToggle, setIsModalVisible } = useModal();
	const [inputValue, setInputValue] = useState(1);
	const [isSubmitting, setIsSubmitting] = useState(false);

	const onChange = value => {
		setInputValue(value);
	};
  
	const handleOk = () => {
		setIsSubmitting(true);
		setTimeout(() => {
			setIsModalVisible(false);
			setIsSubmitting(false);
		}, 2000);
	};

	return (
		<>
			<S.Trigger onClick={ handleToggle }>{ triggerButton }</S.Trigger>
			<S.Modal 
				title={ COPY_TITLE } visible={ isModalVisible } 
				onOk={ handleOk } onCancel={ handleToggle }
				footer={[
					<CopyButton key="back" type="primary" shape="round" loading={ isSubmitting } onClick={ handleOk }>{ COPY_BUTTON }</CopyButton>
				]}
			>
				<ProfileMini value={ value } />
				<S.Info>{ stringFormat(CURRENT_MONEY, insertCommaToNumber(value.CURRENT_MONEY)) }</S.Info>
				<S.Info>{ COPY_VOLUME }</S.Info>
				<Slider inputValue={ inputValue } onChange={ onChange }/>
				<S.ResultInfo>{ stringFormat(COPY_RESULT, insertCommaToNumber(value.COPY_RESULT)) }</S.ResultInfo>
			</S.Modal>
		</>
	)
}

export default Copy;