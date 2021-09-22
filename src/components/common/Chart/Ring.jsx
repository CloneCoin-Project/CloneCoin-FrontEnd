import * as S from '@/components/common/Chart/style';

const Ring = () => {
	return (
		<>
			<S.Tooltip title="3 done / 3 in progress / 4 to do">
				<S.Progress percent={60} success={{ percent: 30 }} type="circle" />
			</S.Tooltip>
		</>
	);
}
  
export default Ring;
