
import * as S from '@pages/leaderportfolio/style';
import { LeaderProfile, LeaderPortfolio } from '@components/leaderportfolio';

const LeaderPortFolioPage = () => {

  return (
    <>
      <S.UserCardWrapper bordered={false} hoverable>
        <>
          <LeaderProfile />
          <LeaderPortfolio />
        </>
      </S.UserCardWrapper>
    </>
  );
};

export default LeaderPortFolioPage;
