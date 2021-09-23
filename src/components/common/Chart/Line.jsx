import * as S from '@/components/common/Chart/style';

const Line = () => {
	return (
		<>
			<S.Progress percent={30} />
			<S.Progress percent={50} status="active" />
			<S.Progress percent={70} status="exception" />
			<S.Progress percent={100} />
			<S.Progress percent={50} showInfo={false} />
		</>
	);
}
  
export default Line;
