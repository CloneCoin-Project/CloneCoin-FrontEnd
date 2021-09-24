import { useState } from 'react';
import { MyPortfolio, Logout, Login } from '@components/layout/header/Menu';
import UserInfo from '@components/layout/header/UserInfo';

import * as S from '@components/layout/header/UserInfoDropDown/style';
import { MY_INFO } from '@assets/string';

const UserInfoDropDown = () => {
  const [isLogin, setIsLogin] = useState(false);

  const handleTempClick = () =>
    setTimeout(() => {
      setIsLogin(!isLogin);
    }, 500);

  return (
    <S.Dropdown
      trigger={['click']}
      overlay={
        <S.Menu>
          {isLogin ? (
            <>
              <S.MenuItem key="userInfo" disabled>
                <UserInfo />
              </S.MenuItem>
              <S.MenuItem key="myportfolio">
                <MyPortfolio />
              </S.MenuItem>
              <S.MenuItem key="logout">
                <Logout onClick={handleTempClick} />
              </S.MenuItem>
            </>
          ) : (
            <>
              <S.MenuItem key="login">
                <Login onClick={handleTempClick} />
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
