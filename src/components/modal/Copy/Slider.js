import * as S from '@components/modal/Copy/style';

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

export default Slider;