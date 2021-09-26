import { LeaderProfile, LeaderPortfolio } from '@components/myportfolio';

import * as S from '@pages/myportfolio/style';

const MyPortfolioPage = () => {
  //로그인 된 경우만 허용 -> 리더인 경우 아닌 경우 분기처리

  return (
    <>
      <S.UserCardWrapper bordered={false} hoverable>
        <LeaderProfile />
        <LeaderPortfolio />
      </S.UserCardWrapper>
    </>
  );
};

export default MyPortfolioPage;
