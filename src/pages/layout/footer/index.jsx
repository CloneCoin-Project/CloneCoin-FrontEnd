import * as S from '@pages/layout/footer/style';
import {
  PROJECT_TITLE,
  COPYRIGHT,
  BUILT,
  ACADEMY,
  THIS_YEAR,
} from '@assets/string';

const LayoutPageFooter = () => {
  return (
    <S.LayoutPageFooter>
      <S.InfoContainer>
        <S.Sub>{COPYRIGHT} </S.Sub>
        <S.Subject>{PROJECT_TITLE}</S.Subject>
        <S._Sub>, {BUILT} </S._Sub>
        <S._Subject>{ACADEMY}</S._Subject>
        <S._Sub>, {THIS_YEAR}</S._Sub>
      </S.InfoContainer>
      <S.LogoContainer>
        <S.LogoImage />
      </S.LogoContainer>
    </S.LayoutPageFooter>
  );
};

export default LayoutPageFooter;
