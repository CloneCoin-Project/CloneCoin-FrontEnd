import * as S from '@components/skeleton/ProfileHeaderSkeleton/style';

const ProfileHeaderSkeleton = () => {
	return (
		<S.Card>
			<S.Skeleton avatar active />
		</S.Card>
	)
}

export default ProfileHeaderSkeleton;
