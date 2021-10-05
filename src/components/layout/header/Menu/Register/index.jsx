import { useCallback } from 'react';
import { useModal, useUserData } from '@hooks';

import * as S from '@components/layout/header/Menu/style';
import { REGISTER } from '@assets/string';

const Register = () => {
  const { isModalVisible, handleToggle, setIsModalVisible } = useModal();
  const { signUp } = useUserData();

  const onFinished = useCallback(({ userId, email, userName, password }) => {
    signUp({
      signUpRequest: {
        userId,
        email,
        userName,
        password,
      },
      onSuccess: () => {
        S.message.info('회원가입이 완료되었습니다.');
        setIsModalVisible(false);
      },
      onFailure: () => {
        S.message.error('에러가 발생하였습니다.');
      },
    });
  }, []);

  return (
    <>
      <S.Button type="text" children={REGISTER} onClick={handleToggle} />
      <S.Modal
        title={REGISTER}
        visible={isModalVisible}
        onCancel={handleToggle}
        footer={null}
        width={450}
      >
        <S.RegisterFormContainer>
          <S.Form onFinish={onFinished}>
            <S.Form.Item
              label="아이디"
              name="userId"
              labelCol={{ span: 7 }}
              rules={[
                { required: true, message: '아이디를 입력해주세요!' },
                {
                  validator(_, value) {
                    const regExp = /[ㄱ-ㅎㅏ-ㅣ가-힣]/g;
                    if (!regExp.test(value)) return Promise.resolve();
                    else {
                      return Promise.reject(
                        new Error('한글은 입력할 수 없습니다.'),
                      );
                    }
                  },
                },
              ]}
              children={
                <S.Input placeholder="아이디" suffix={<S.UserOutlined />} />
              }
            />
            <S.Form.Item
              label="이름"
              name="userName"
              labelCol={{ span: 7 }}
              rules={[{ required: true, message: '이름을 입력해주세요!' }]}
              children={
                <S.Input placeholder="이름" suffix={<S.MailOutlined />} />
              }
            />

            <S.Form.Item
              label="이메일"
              name="email"
              labelCol={{ span: 7 }}
              rules={[{ required: true, message: '이메일을 입력해주세요!' }]}
              children={
                <S.Input placeholder="이메일" suffix={<S.MailOutlined />} />
              }
            />
            <S.Form.Item
              label="비밀번호"
              name="password"
              labelCol={{ span: 7 }}
              children={
                <S.Input
                  type="password"
                  placeholder="비밀번호"
                  suffix={<S.LockOutlined />}
                />
              }
            />
            <S.Form.Item
              label="비밀번호 확인"
              labelCol={{ span: 7 }}
              name="passwordCheck"
              dependencies={['password']}
              rules={[
                {
                  required: true,
                  message: '비밀번호를 한번 더 입력해 주세요',
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue('password') === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      new Error('두 비밀번호가 일치하지 않습니다.'),
                    );
                  },
                }),
              ]}
              children={
                <S.Input
                  type="password"
                  placeholder="비밀번호 확인"
                  suffix={<S.LockOutlined />}
                />
              }
            />
            <S.Form.Item
              children={
                <S.RegisterButtonContainer>
                  <S.RegisterButton
                    // loading={registerLoading}
                    htmlType="submit"
                    type="primary"
                    children={'Register'}
                  />
                  <S.NormalButton
                    // loading={registerLoading}
                    onClick={handleToggle}
                    style={{ margin: '0 8px' }}
                    children={'Cancel'}
                  />
                </S.RegisterButtonContainer>
              }
            />
          </S.Form>
        </S.RegisterFormContainer>
      </S.Modal>
    </>
  );
};
export default Register;
