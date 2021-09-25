import { useState, useEffect } from "react";
import { fetchOneUser } from '@apis/rest/user';
import { ProfileHeaderSkeleton } from '@components/skeleton';
import { COUNT_COPIED, COUNT_FOLLOWED, COUNT_FOLLOWING, COPY_BUTTON, EDIT_BUTTON } from '@assets/string';
import { CopyModal } from '@/components/modal';
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
				<CopyModal parent='ProfileCard' str={ COPY_BUTTON } />
			</S.UpperSection>

			<S.UnderSection>
				<S.Introduction>{ introduction }<S.EditButton type="text">{ EDIT_BUTTON }</S.EditButton></S.Introduction>
			</S.UnderSection>
		</S.ProfileCard>
	)
}

const ProfileHeader = ({ userId }) => {
	const [isLoading, setIsLoading] = useState(false);
	const [profile, setProfile] = useState(null);

	useEffect( async () => {
		setIsLoading(true);
		let user = await fetchOneUser(userId);
		setIsLoading(false);
		setProfile(user.data);
	}, []);

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