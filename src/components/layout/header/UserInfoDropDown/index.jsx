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
              <S.Menu.Item
                key="userInfo"
                disabled
                style={{ cursor: 'pointer' }}
              >
                <UserInfo />
              </S.Menu.Item>
              <S.Menu.Item key="myportfolio">
                <MyPortfolio />
              </S.Menu.Item>
              <S.Menu.Item key="logout" onClick={handleTempClick}>
                <Logout />
              </S.Menu.Item>
            </>
          ) : (
            <>
              <S.Menu.Item key="login" onClick={handleTempClick}>
                <Login />
              </S.Menu.Item>
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
