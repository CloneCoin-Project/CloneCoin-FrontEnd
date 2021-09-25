import * as S from '@components/myportfolio/style';

const LeaderProfile = () => {
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
                {'이진수'}
                <S.Button color="#e48701" type="text">
                  리더
                </S.Button>
                {/* <S.Badge dot>
                        <S.NotificationOutlined style={{ fontSize: 16 }} />
                      </S.Badge> */}
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
                {'보유 KRW'}
                <S.Divider type="vertical" />
                {'총 보유자산'}
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
      <S.DescriptionContainer>
        <S.Divider orientation="left" style={{margin: "2rem 0"}}>한줄 소개</S.Divider>
        <S.DescriptionContent>
          안녕하세요 진수님입니다아ㅏㅏ
          안녕하세요 진수님입니다아ㅏㅏ
          안녕하세요 진수님입니다아ㅏㅏ
          안녕하세요 진수님입니다아ㅏㅏ
          안녕하세요 진수님입니다아ㅏㅏ
          안녕하세요 진수님입니다아ㅏㅏ
          안녕하세요 진수님입니다아ㅏㅏ
          안녕하세요 진수님입니다아ㅏㅏ

        </S.DescriptionContent>
      </S.DescriptionContainer>
    </>
  );
};

export default LeaderProfile;
