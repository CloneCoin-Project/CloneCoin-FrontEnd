import * as S from '@components/layout/header/UserInfo/style';

const UserInfo = () => {
  return (
    <S.Card>
      <S.Meta
        avatar={
          <S.Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
        }
        title="TEMP"
        description="description"
      />
    </S.Card>
  );
};

export default UserInfo;
