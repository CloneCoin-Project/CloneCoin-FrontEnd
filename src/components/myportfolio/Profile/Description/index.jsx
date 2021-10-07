import { useEffect } from 'react';
import { useUserData } from '@hooks';

import * as S from '@components/myportfolio/style';
import { DESC_TITLE } from '@assets/string';

const LeaderDescription = () => {
  const { ID, getDescription, userDescriptionLoading, userDescriptionData } =
    useUserData();

  useEffect(() => {
    getDescription({ getDescriptionRequest: { userId: ID } });
  }, []);
  /*
    일단은 리더가 마이 포트폴리오를 클릭했을때만 렌더되는 컴포넌트로
    ID보냄 / 추후 리더 포트폴리오에서 쓴다면 location보고 하면 됨
  */
  return (
    <S.DescriptionContainer>
      <S.Divider orientation="left" style={{ margin: '2rem 0' }}>
        {DESC_TITLE}
      </S.Divider>
      <S.DescriptionContent>{userDescriptionData}</S.DescriptionContent>
    </S.DescriptionContainer>
  );
};

export default LeaderDescription;
