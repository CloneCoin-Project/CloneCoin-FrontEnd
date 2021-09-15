import { Suspense, useEffect } from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router';

import LayoutPageHeader from '@pages/layout/header';
import FallbackLoading from '@components/common/FallbackLoading';

import * as S from '@pages/layout/style';

const LayoutPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    location.pathname === '/' && navigate('/home');
  }, [navigate, location]);

  return (
    <S.LayoutPageContainer>
      <LayoutPageHeader />
        <Suspense fallback={<FallbackLoading />}>
          <Outlet />
        </Suspense>
    </S.LayoutPageContainer>
  );
};

export default LayoutPage;
