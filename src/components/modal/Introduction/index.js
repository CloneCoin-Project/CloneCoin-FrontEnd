import { useState } from 'react';
import * as S from '@components/modal/Introduction/style';
import { EditButton } from '@/components/common/ProfileHeader/style';
import { EDIT_TITLE } from '@assets/string';

const Introduction = (props) => {
	const { str } = props;

	const [isVisible, setIsVisible] = useState(false);
	const [isLoading, setIsLoading] = useState(false);

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

	return(
		<>
			<EditButton type="text" onClick={ showModal }>{ str }</EditButton>
			<S.Modal
				title={ EDIT_TITLE } visible={ isVisible } 
				onOk={ handleOk } onCancel={ handleCancel }
				footer={[
					<S.ConfirmButton key="back" loading={ isLoading } onClick={ handleOk }>{ str }</S.ConfirmButton>
				]}
			>
			</S.Modal>
		</>
	)
}

export default Introduction;