import { useEffect } from 'react';
import { useNavigate } from 'react-router';

import { useUserData } from '@hooks';
import { MyProfile, MyPortfolio } from '@components/myportfolio';

import * as S from '@pages/myportfolio/style';

const MyPortfolioPage = () => {
  //로그인 된 경우만 허용
  const navigate = useNavigate();
  const { isLogged } = useUserData();

  useEffect(() => {
    if (!isLogged) {
      navigate({ pathname: '/home' });
    }
  }, [isLogged]);

  return (
    <>
      <S.UserCardWrapper bordered={false} hoverable>
        <>
          <MyProfile />
          <MyPortfolio />
        </>
      </S.UserCardWrapper>
    </>
  );
};

export default MyPortfolioPage;
