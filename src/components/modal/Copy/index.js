import { useState } from 'react';
import { stringFormat, insertCommaToNumber } from '@/utils/stringFormat';
import { COPY_TITLE, COPY_VOLUME, CURRENT_MONEY, AVERAGE_EARNING, EARNING_BEST, COPY_RESULT, MONTH, UNIT } from '@assets/string';
import { CopyButton } from '@/components/common/ProfileHeader/style';
import * as S from '@components/modal/Copy/style';

const value = {
	AVERAGE_EARNING: 60.1,
	EARNING_BEST: 200.1,
	COPY_VOLUME: 40,
	CURRENT_MONEY: 500000,
	COPY_RESULT: 200000
}

const ProfileMini = () => {
	return (
		<S.ProfileCard>
			<S.Avatar size={64} />
			<S.RightSection>
				<S.Info>
					{ 'famous leader' }
				</S.Info>
				<S.Info>
					{ AVERAGE_EARNING } <S.Percentage positive={ value.AVERAGE_EARNING > 0 }>{ value.AVERAGE_EARNING } { UNIT } ({ MONTH })</S.Percentage>
				</S.Info>
				<S.Info>
					{ EARNING_BEST } <S.Percentage positive={ value.EARNING_BEST > 0 }>{ value.EARNING_BEST } { UNIT }</S.Percentage>
				</S.Info>
			</S.RightSection>
		</S.ProfileCard>
	)
}

const Slider = (props) => {
	const { inputValue, onChange } = props;

	return (
		<S.Row>
			<S.Col span={12}>
			<S.Slider
				min={1}
				max={100}
				onChange={onChange}
				value={typeof inputValue === 'number' ? inputValue : 0}
			/>
			</S.Col>
			<S.Col span={4}>
			<S.InputNumber
				min={1}
				max={20}
				style={{ margin: '0 16px' }}
				value={inputValue}
				onChange={onChange}
			/>
			</S.Col>
      	</S.Row>
	)
}

const Copy = (props) => {
	const { parent, str } = props;

	const [inputValue, setInputValue] = useState(1);
	const [isVisible, setIsVisible] = useState(false);
	const [isLoading, setIsLoading] = useState(false);

	const onChange = value => {
		setInputValue(value);
	};

	const showModal = () => {
		setIsVisible(true);
	};
  
	const handleOk = () => {
		setIsLoading(true);
		setTimeout(() => {
			setIsVisible(false);
			setIsLoading(false);
		}, 2000);
	};
  
	const handleCancel = () => {
		setIsVisible(false);
	};

	return (
		<>
			{ parent === 'ProfileCard' ? <CopyButton type="primary" shape="round" onClick={ showModal }>{ str }</CopyButton> : <button onClick={ showModal }/> }
			<S.Modal 
				title={ COPY_TITLE } visible={ isVisible } 
				onOk={ handleOk } onCancel={ handleCancel }
				footer={[
					<CopyButton key="back" type="primary" shape="round" loading={isLoading} onClick={handleOk}>{ str }</CopyButton>
				]}
				>
				<ProfileMini />
				<S.Info>{ stringFormat(CURRENT_MONEY, insertCommaToNumber(value.CURRENT_MONEY)) }</S.Info>
				<S.Info>{ COPY_VOLUME }</S.Info>
				<Slider inputValue={ inputValue } onChange={ onChange }/>
				<S.ResultInfo>{ stringFormat(COPY_RESULT, insertCommaToNumber(value.COPY_RESULT)) }</S.ResultInfo>
			</S.Modal>
		</>
	)
}

export default Copy;