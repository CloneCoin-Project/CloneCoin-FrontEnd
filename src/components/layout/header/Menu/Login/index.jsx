import { useCallback } from 'react';
import { useModal } from '@hooks';

import * as S from '@components/layout/header/Menu/style';
import { LOGIN } from '@assets/string';

const Login = () => {
  const { isModalVisible, handleToggle } = useModal();

  const onFinished = useCallback(({ userId, password }) => {
    // signIn({ username, password });
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
                  placeholder="Enter ID"
                  suffix={<S.MailTwoTone twoToneColor="#e48701" />}
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
                  placeholder="Password"
                  suffix={<S.LockTwoTone twoToneColor="#e48701" />}
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
                  // loading={loginStatusLoading}
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
