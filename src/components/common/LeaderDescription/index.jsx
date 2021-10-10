import { useEffect, useState, useCallback } from 'react';
import { useLocation } from 'react-router';

import { useUserData } from '@hooks';

import * as S from '@components/common/LeaderDescription/style';
import { DESC_TITLE } from '@assets/string';
import { isPortFolio } from '@utils/portfolioUtil';

const LeaderDescription = () => {
  const {
    ID,
    getDescription,
    postDescription,
    userDescriptionData,
  } = useUserData();
  const location = useLocation();
  const [isEdit, setIsEdit] = useState(false);
  const [description, setDescription] = useState('');

  const { pathname } = location;

  useEffect(() => {
    if(isPortFolio(pathname)) {
      getDescription({ getDescriptionRequest: { userId: ID } });
    } else {
      const pathSplited = pathname.split('/');
      const leaderId = pathSplited[pathSplited.length-1];
      getDescription({ getDescriptionRequest: { userId: leaderId } });
    }
  }, [pathname]);

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
          {isPortFolio(pathname) && (
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
