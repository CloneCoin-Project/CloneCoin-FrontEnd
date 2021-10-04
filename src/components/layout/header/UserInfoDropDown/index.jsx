import {
  MyPortfolio,
  Logout,
  Login,
  Register,
} from '@components/layout/header/Menu';
import UserInfo from '@components/layout/header/UserInfo';
import { useUserData } from '@hooks';

import * as S from '@components/layout/header/UserInfoDropDown/style';
import { MY_INFO } from '@assets/string';

const UserInfoDropDown = () => {
  const { isLogged } = useUserData();

  return (
    <S.Dropdown
      trigger={['click']}
      overlay={
        <S.Menu>
          {isLogged ? (
            <>
              <S.MenuItem key="userInfo" disabled>
                <UserInfo />
              </S.MenuItem>
              <S.MenuItem key="myportfolio">
                <MyPortfolio />
              </S.MenuItem>
              <S.MenuItem key="logout">
                <Logout />
              </S.MenuItem>
            </>
          ) : (
            <>
              <S.MenuItem key="login">
                <Login />
              </S.MenuItem>
              <S.MenuItem key="register">
                <Register />
              </S.MenuItem>
            </>
          )}
        </S.Menu>
      }
    >
      <S.Button type="text" icon={<S.UserOutlined />} children={MY_INFO} />
    </S.Dropdown>
  );
};

export default UserInfoDropDown;
