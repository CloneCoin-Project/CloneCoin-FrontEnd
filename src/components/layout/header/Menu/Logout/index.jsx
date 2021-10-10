import { useNavigate } from 'react-router';

import * as S from '@components/layout/header/Menu/style';
import { LOGOUT } from '@assets/string';
import { useUserData } from '@hooks';

const Logout = () => {
  const navigate = useNavigate();
  const { logout } = useUserData();

  return (
    <S.Button
      type="text"
      children={LOGOUT}
      onClick={() => {
        logout();
        navigate({ pathname: '/home' });
      }}
    />
  );
};

export default Logout;
