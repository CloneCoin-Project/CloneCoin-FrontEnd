import { useState, useEffect } from "react";
import { ProfileHeaderSkeleton } from '@components/skeleton';
import { COUNT_COPIED, COUNT_FOLLOWED, COUNT_FOLLOWING, COPY_BUTTON, EDIT_BUTTON } from '@assets/string';
import { CopyModal, IntroductionModal } from '@/components/modal';
import * as S from '@/components/common/ProfileHeader/style';

const ProfileCard = ( props ) => {
	let { nickname, introduction, profile_image, count_copied, count_followed, count_following } = props;

	return (
		<S.ProfileCard>
			<S.UpperSection>
				<S.Avatar size={64} icon={<S.UserOutlined />} src={ profile_image }/>
				<S.InnerSection>
					<S.Nickname>
						{ nickname }
						<S.FollowButton type="link" icon={<S.StarOutlined />}/>
					</S.Nickname>
					<S.Count>
						{ count_copied } { COUNT_COPIED } { count_followed } { COUNT_FOLLOWED } { count_following } { COUNT_FOLLOWING }
					</S.Count>
				</S.InnerSection>
				<CopyModal
					triggerButton={
						<S.CopyButton type="primary" shape="round">{ COPY_BUTTON }</S.CopyButton>
					}
					str={ COPY_BUTTON }
				/>
			</S.UpperSection>

			<S.UnderSection>
				<S.Introduction>{ introduction }
					<IntroductionModal str={ EDIT_BUTTON }/>
				</S.Introduction>
			</S.UnderSection>
		</S.ProfileCard>
	)
}

const ProfileHeader = ({ userId }) => {
	const [isLoading, setIsLoading] = useState(false);
	const [profile, setProfile] = useState(null);

	return (
		<>
		{ isLoading
			? <ProfileHeaderSkeleton />
			: <ProfileCard
				nickname={'nickname'}
				introduction={'description description description description description description description description'}
				profile_image={''}
				count_copied={0}
				count_followed={0}
				count_following={0}
			/>
		}
		</>
	)
}

export default ProfileHeader;
