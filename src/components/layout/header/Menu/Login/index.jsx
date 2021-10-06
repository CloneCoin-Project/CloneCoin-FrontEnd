import { useCallback } from 'react';
import { useModal, useUserData } from '@hooks';

import * as S from '@components/layout/header/Menu/style';
import { LOGIN } from '@assets/string';

const Login = () => {
  const { isModalVisible, handleToggle } = useModal();
  const { signIn, loginStatusLoading } = useUserData();
  const onFinished = useCallback(({ userId, password }) => {
    signIn({signInRequest : { userId, password },
      onSuccess: () => {
        S.message.success('로그인이 완료되었습니다.');
      },
      onFailure: () => {
        S.message.error('에러가 발생하였습니다.');
      },
      });
  }, []);

  return (
    <>
      <S.Button type="text" children={LOGIN} onClick={handleToggle} />
      <S.Modal
        title={LOGIN}
        visible={isModalVisible}
        onCancel={handleToggle}
        footer={null}
        width={320}
      >
        <S.LoginFormContainer>
          <S.Form onFinish={onFinished}>
            <S.Form.Item
              name="userId"
              rules={[{ required: true, message: '아이디를 입력해주세요!' }]}
              children={
                <S.Input
                  autoComplete="userId"
                  placeholder="아이디"
                  suffix={<S.UserOutlined />}
                />
              }
            />
            <S.Form.Item
              name="password"
              rules={[{ required: true, message: '비밀번호를 입력해주세요!' }]}
              children={
                <S.Input
                  autoComplete="current-password"
                  type="password"
                  placeholder="패스워드"
                  suffix={<S.LockOutlined />}
                />
              }
            />
            <S.Form.Item
              name="remember"
              valuePropName="checked"
              initialValue="true"
              children={<S.Checkbox children={'Remember Me'} />}
            />
            <S.Form.Item
              children={
                <S.LoginButton
                  loading={loginStatusLoading}
                  block
                  htmlType="submit"
                  type="primary"
                  children={'Login'}
                />
              }
            />
          </S.Form>
        </S.LoginFormContainer>
      </S.Modal>
    </>
  );
};
export default Login;
