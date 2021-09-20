import { UserInfoDropDown, RTQDrawer } from '@components/layout/header';

import * as S from '@pages/layout/header/style';

const LayoutPageHeader = () => {
  return (
    <S.LayoutPageHeader>
      <S.LogoContainer to="/home">
        <S.LogoImage />
        <S.LogoTitle />
      </S.LogoContainer>
      <S.InfoContainer>
        <RTQDrawer />
        <UserInfoDropDown />
      </S.InfoContainer>
    </S.LayoutPageHeader>
  );
};

export default LayoutPageHeader;
