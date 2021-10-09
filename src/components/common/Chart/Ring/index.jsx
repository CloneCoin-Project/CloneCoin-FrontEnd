import { useEffect, useState } from 'react';

import { useWalletData, useUserData, usePortfolioData } from '@hooks';
import { convertToFixed } from '@utils/parse';
import * as S from '@/components/common/Chart/style';

import { RING_COLOR } from '@assets/color';
import { STATUS_LEADER, STATUS_NORMAL } from '@assets/string';

const RingDetail = ({ data, status }) => {
  return (
    <S.DetailContainer>
      {data.map((item, index) => (
        <S.Detail key={index}>
          <S.SmallCircle color={RING_COLOR[index % RING_COLOR.length]} />
          <S.Name>
            {status === STATUS_LEADER ? item.coinName : item.leaderName}
          </S.Name>
          <S.Ratio>
            {status === STATUS_LEADER
              ? `${convertToFixed(item.ratio)}%`
              : `${item.copyRatio}%`}
          </S.Ratio>
        </S.Detail>
      ))}
    </S.DetailContainer>
  );
};

const Ring = () => {
  const [invertData, setInvertData] = useState();
  const { userStatus } = useUserData();
  const { leaderInvestRatio } = useWalletData();
  const { myPortfolioRatioSelectorData } = usePortfolioData();

  useEffect(() => {
    if (userStatus === STATUS_LEADER) {
      setInvertData(leaderInvestRatio);
    } else if (userStatus === STATUS_NORMAL) {
      setInvertData(myPortfolioRatioSelectorData);
    }
  }, [userStatus, leaderInvestRatio, myPortfolioRatioSelectorData]);

  return (
    <S.Container>
      {invertData && (
        <>
          <S.PieChart width={200} height={200}>
            <S.Pie
              data={invertData}
              innerRadius={40}
              outerRadius={80}
              paddingAngle={0}
              startAngle={90}
              endAngle={450}
              dataKey={userStatus === STATUS_LEADER ? 'ratio' : 'copyRatio'}
            >
              {invertData.map((entry, index) => (
                <S.Cell
                  key={`cell-${index}`}
                  fill={RING_COLOR[index % RING_COLOR.length]}
                />
              ))}
            </S.Pie>
          </S.PieChart>
          <RingDetail
            data={invertData}
            status={userStatus}
            style={{ width: '400px' }}
          />
        </>
      )}
    </S.Container>
  );
};

export default Ring;
