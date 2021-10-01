import { useCallback } from 'react';
import { useModal } from '@hooks';

import * as S from '@components/layout/header/Menu/style';
import { REGISTER } from '@assets/string';

const Register = () => {
  const { isModalVisible, handleToggle } = useModal();

  const onFinished = useCallback(({ userId, password }) => {
    // signIn({ username, password });
  }, []);

  return (
    <>
      <S.Button type="text" children={REGISTER} onClick={handleToggle} />
      <S.Modal
        title={REGISTER}
        visible={isModalVisible}
        onCancel={handleToggle}
        footer={null}
        width={400}
      >
        <S.RegisterFormContainer>
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
              children={
                <S.LoginButton
                  // loading={loginStatusLoading}
                  block
                  htmlType="submit"
                  type="primary"
                  children={'Register'}
                />
              }
            />
          </S.Form>
        </S.RegisterFormContainer>
      </S.Modal>
    </>
  );
};
export default Register;
