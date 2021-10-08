import { useUserData } from '@hooks';
import * as S from '@components/layout/header/UserInfo/style';
import { STATUS_LEADER, TEXT_LEADER } from '@assets/string';

const UserInfo = () => {
  const { userName, userId, email, userStatus } = useUserData();

  return (
    <S.Card>
      <S.Meta
        avatar={<S.Avatar size={40} icon={<S.UserOutlined />} />}
        title={
          <S.TitleContainer>
            <div>
              {`${userId}`}
              <S.Divider type="vertical" />
              {`${userName}`}
            </div>
            {userStatus === STATUS_LEADER && (
              <S.Tag color="gold" style={{ width: '57px' }}>
                {TEXT_LEADER}
              </S.Tag>
            )}
          </S.TitleContainer>
        }
        description={
          <>
            <S.Paragraph>{`Email: ${email}`}</S.Paragraph>
            {/* {userStatus === STATUS_LEADER && (
              <S.Paragraph>description</S.Paragraph>
            )} */}
          </>
        }
      />
    </S.Card>
  );
};

export default UserInfo;
