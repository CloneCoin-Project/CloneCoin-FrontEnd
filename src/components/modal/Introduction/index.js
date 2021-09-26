import { useState } from 'react';
import * as S from '@components/modal/Introduction/style';
import { EditButton } from '@/components/common/ProfileHeader/style';
import { EDIT_TITLE } from '@assets/string';

const Editor = ({ onChange, value }) => {
	return (
		<S.Form>
			<S.Input rows={ 4 } onChange={ onChange } value={ value } />
		</S.Form>
	)
};

const Introduction = (props) => {
	const { str } = props;

	const [isVisible, setIsVisible] = useState(false);
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [inputValue, setInputValue] = useState("");

	// setIsVisible, setIsLoading
	const showModal = () => {
		setIsVisible(true);
	};
  
	const handleCancel = () => {
		setIsVisible(false);
	};

	// setInputValue
	const handleChange = e => {
		setInputValue(e.target.value);
	}

	// setIsSubmitting
	const handleSubmit = () => {
		if (inputValue.length <= 0) {
			return;
		}
	
		setIsSubmitting(true);
	
		setTimeout(() => {
			setIsSubmitting(false);
			setInputValue("");
			setIsVisible(false);
		}, 2000);
	};

	return(
		<>
			<EditButton type="text" onClick={ showModal }>{ str }</EditButton>
			<S.Modal
				title={ EDIT_TITLE } visible={ isVisible } 
				onOk={ handleSubmit } onCancel={ handleCancel }
				footer={[
					<S.ConfirmButton key="back" shape="round" loading={ isSubmitting } onClick={ handleSubmit }>{ str }</S.ConfirmButton>
				]}
			>
				<S.Comment
					content={
						<Editor
							onChange={ handleChange }
							value={ inputValue }
						/>
					}
				/>
			</S.Modal>
		</>
	)
}

export default Introduction;