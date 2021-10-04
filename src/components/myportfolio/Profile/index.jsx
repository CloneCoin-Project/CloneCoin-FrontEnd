import { useUserData } from '@hooks';
import * as S from '@components/myportfolio/style';
import {
  TEXT_LEADER_KR,
  DESC_TITLE,
  HOLDING_KRW,
  HOLDING_TOTAL,
  STATUS_LEADER,
  STATUS_NORMAL,
  TEXT_NORAML_KR,
  TEXT_LEADER_DELETE,
} from '@assets/string';

const MyProfile = () => {
  const { userName, userStatus } = useUserData();

  return (
    <>
      <S.Row gutter={[12]} align="middle">
        <S.Col xs={6} sm={3}>
          <S.Avatar size={52} icon={<S.UserOutlined />} />
        </S.Col>
        <S.Col xs={18} sm={9}>
          <S.Row>
            <S.Col span={24}>
              <S.NickNameContainer>
                {userName}
                {userStatus === STATUS_LEADER ? (
                  <S.Popconfirm title={TEXT_LEADER_DELETE}>
                    <S.Button color="#e48701" type="text">
                      {TEXT_LEADER_KR}
                    </S.Button>
                  </S.Popconfirm>
                ) : (
                  <S.Button color="#e48701" type="text">
                    {TEXT_NORAML_KR}
                  </S.Button>
                )}
              </S.NickNameContainer>
            </S.Col>
            <S.Col xs={24} sm={24}>
              <S.CopyFollowContainer>
                <S.Button type="text">copied: 10</S.Button>
                <S.Divider type="vertical" />
                <S.Button type="text">follower: 3</S.Button>
              </S.CopyFollowContainer>
            </S.Col>
          </S.Row>
        </S.Col>

        <S.Col xs={24} sm={12}>
          <S.Row>
            <S.Col span={24}>
              <S.BalanceHeader>
                {HOLDING_KRW}
                <S.Divider type="vertical" />
                {HOLDING_TOTAL}
              </S.BalanceHeader>
            </S.Col>
            <S.Col span={24}>
              <S.BalanceHeader>
                {'1,000,000'}
                <S.Divider type="vertical" />
                {'2,000,000'}
              </S.BalanceHeader>
            </S.Col>
          </S.Row>
        </S.Col>
      </S.Row>
      {userStatus === STATUS_LEADER && (
        <S.DescriptionContainer>
          <S.Divider orientation="left" style={{ margin: '2rem 0' }}>
            {DESC_TITLE}
          </S.Divider>
          <S.DescriptionContent>
            안녕하세요 진수님입니다아ㅏㅏ 안녕하세요 진수님입니다아ㅏㅏ
            안녕하세요 진수님입니다아ㅏㅏ 안녕하세요 진수님입니다아ㅏㅏ
            안녕하세요 진수님입니다아ㅏㅏ 안녕하세요 진수님입니다아ㅏㅏ
            안녕하세요 진수님입니다아ㅏㅏ 안녕하세요 진수님입니다아ㅏㅏ
          </S.DescriptionContent>
        </S.DescriptionContainer>
      )}
    </>
  );
};

export default MyProfile;
