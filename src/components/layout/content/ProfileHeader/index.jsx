import { useState, useEffect } from "react";
import { fetchOneUser } from '@apis/rest/user';
import { ProfileHeaderSkeleton } from '@components/skeleton';
import * as S from '@components/layout/content/ProfileHeader/style';
import { COUNT_COPIED, COUNT_FOLLOWED, COUNT_FOLLOWING, COPY_BUTTON } from '@assets/string';

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
				<S.CopyButton type="primary" shape="round">{ COPY_BUTTON }</S.CopyButton>
			</S.UpperSection>

			<S.UnderSection>
				{ introduction }
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
		console.log('ProfileHeader data', user.data.results[0]);   // Delete
		let data = user.data.results[0];   // Delete
		setIsLoading(false);
		setProfile(data);
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