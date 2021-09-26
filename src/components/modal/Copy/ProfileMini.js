import { AVERAGE_EARNING, EARNING_BEST, MONTH, UNIT } from '@assets/string';
import * as S from '@components/modal/Copy/style';

const ProfileMini = (props) => {
	const { value } = props;

	return (
		<S.ProfileCard>
			<S.Avatar size={64} />
			<S.RightSection>
				<S.Info>
					{ 'famous leader' }
				</S.Info>
				<S.Info>
					{ AVERAGE_EARNING } <S.Percentage positive={ value.AVERAGE_EARNING > 0 }>{ value.AVERAGE_EARNING } { UNIT } ({ MONTH })</S.Percentage>
				</S.Info>
				<S.Info>
					{ EARNING_BEST } <S.Percentage positive={ value.EARNING_BEST > 0 }>{ value.EARNING_BEST } { UNIT }</S.Percentage>
				</S.Info>
			</S.RightSection>
		</S.ProfileCard>
	)
}

export default ProfileMini;