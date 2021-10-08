import { useEffect, useState, useCallback } from 'react';
import { useLocation } from 'react-router';

import { useUserData } from '@hooks';

import * as S from '@components/myportfolio/style';
import { DESC_TITLE } from '@assets/string';
import { isPortFolio } from '@utils/portfolioUtil';

const LeaderDescription = () => {
  const {
    ID,
    getDescription,
    postDescription,
    userDescriptionLoading,
    userDescriptionData,
  } = useUserData();
  const location = useLocation();
  const [isEdit, setIsEdit] = useState(false);
  const [description, setDescription] = useState('');

  const { pathname } = location;

  useEffect(() => {
    getDescription({ getDescriptionRequest: { userId: ID } });
  }, []);
  /*
    일단은 리더가 마이 포트폴리오를 클릭했을때만 렌더되는 컴포넌트로
    ID보냄 / 추후 리더 포트폴리오에서 쓴다면 location보고 하면 됨
  */

  useEffect(() => {
    setDescription(userDescriptionData);
  }, [userDescriptionData]);

  const handleSave = useCallback(() => {
    postDescription({
      postDescriptionRequest: { userId: ID, description },
      onSuccess: () => {
        S.message.success('수정이 완료되었습니다.');
        setIsEdit(!isEdit);
      },
      onFailure: () => {
        S.message.error('에러가 발생하였습니다.');
        setIsEdit(!isEdit);
      },
    });
  }, [description]);

  const handleEdit = useCallback(() => {
    setIsEdit(!isEdit);
  }, [isEdit]);

  const onChange = useCallback((e) => {
    setDescription(e.target.value);
  }, []);

  return (
    <S.DescriptionContainer>
      <S.Divider orientation="left" style={{ margin: '2rem 0' }}>
        <S.DividerContent>
          <span>{DESC_TITLE}</span>
          {isPortFolio && (
            <S.NormalButton
              shape="circle"
              size="small"
              icon={<S.EditOutlined />}
              onClick={handleEdit}
            />
          )}
        </S.DividerContent>
      </S.Divider>
      <S.DescriptionContent>
        {!isEdit ? (
          <div>{userDescriptionData}</div>
        ) : (
          <>
            <S.TextArea
              value={description}
              bordered={false}
              allowClear
              showCount
              maxLength={40}
              onChange={onChange}
            />
            <S.Button onClick={handleSave}>Save</S.Button>
          </>
        )}
      </S.DescriptionContent>
    </S.DescriptionContainer>
  );
};

export default LeaderDescription;
