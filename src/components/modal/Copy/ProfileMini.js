import { AVERAGE_EARNING, EARNING_BEST, MONTH, UNIT } from '@assets/string';
import * as S from '@components/modal/Copy/style';

import { convertToFixed } from '@utils/parse';

const ProfileMini = (props) => {
  const { leaderEarningRate, leaderEarningBest } = props;

  return (
    <S.ProfileCard>
      <S.Avatar size={64} icon={<S.UserOutlined />} />
      <S.RightSection>
        <S.Info>{'famous leader'}</S.Info>
        <S.Info>
          {AVERAGE_EARNING}{' '}
          <S.Percentage positive={leaderEarningRate > 0}>
            {convertToFixed(leaderEarningRate, 2)} {UNIT} ({MONTH})
          </S.Percentage>
        </S.Info>
        <S.Info>
          {EARNING_BEST}{' '}
          <S.Percentage positive={leaderEarningBest > 0}>
            {convertToFixed(leaderEarningBest, 2)} {UNIT}
          </S.Percentage>
        </S.Info>
      </S.RightSection>
    </S.ProfileCard>
  );
};

export default ProfileMini;
