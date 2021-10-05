import { useCallback } from 'react';
import { useModal, useUserData } from '@hooks';

import * as S from '@components/myportfolio/style';
import { TEXT_NORAML_KR, LEADER_REGISTER } from '@assets/string';

const LeaderRegisterModal = () => {
  const { isModalVisible, handleToggle, setIsModalVisible } = useModal();
  const { ID, leaderRegisterLoading, leaderRegister } = useUserData();

  const onFinished = useCallback(({ apiKey, secretKey }) => {
    leaderRegister({
      leaderRegisterRequest: { ID, apiKey, secretKey },
      onSuccess: () => {
        S.message.info('리더 등록이 완료되었습니다.');
        setIsModalVisible(false);
      },
      onFailure: () => {
        S.message.error('에러가 발생하였습니다.');
      },
    });
  }, []);

  return (
    <>
      <S.Button color="#e48701" type="text" onClick={handleToggle}>
        {TEXT_NORAML_KR}
      </S.Button>
      <S.Modal
        title={LEADER_REGISTER}
        visible={isModalVisible}
        onCancel={handleToggle}
        footer={null}
        width={320}
      >
        <S.Form onFinish={onFinished}>
          <S.Form.Item
            name="apiKey"
            rules={[{ required: true, message: 'API KEY를 입력해주세요!' }]}
            children={<S.Input placeholder="API KEY" />}
          />
          <S.Form.Item
            name="secretKey"
            rules={[{ required: true, message: 'SECRET KEY를 입력해주세요!' }]}
            children={
              <S.Input
                // type="password"
                placeholder="SECRET KEY"
              />
            }
          />
          <S.Form.Item
            children={
              <S.LeaderRegisterButton
                loading={leaderRegisterLoading}
                block
                htmlType="submit"
                type="primary"
                children={'Leader Register'}
              />
            }
          />
        </S.Form>
      </S.Modal>
    </>
  );
};

export default LeaderRegisterModal;
