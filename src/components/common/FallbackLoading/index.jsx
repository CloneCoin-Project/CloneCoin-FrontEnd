import * as S from "@components/common/FallbackLoading/style";

const FallbackLoading = () => {
  return (
    <S.Container>
      <S.Spin tip="Loading..." />
    </S.Container>
  );
};
export default FallbackLoading;
