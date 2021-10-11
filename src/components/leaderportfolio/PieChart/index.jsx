import { useEffect, useState } from 'react';

import { useWalletData } from '@hooks';
import { convertToFixed } from '@utils/parse';
import { sortPieObjArr } from '@utils/sort';
import * as S from '@/components/common/Chart/style';
import { RING_COLOR } from '@assets/color';

const RingDetail = ({ data }) => {
  return (
    <S.DetailContainer>
      {data.map((item, index) => (
        <S.Detail key={index}>
          <S.SmallCircle color={RING_COLOR[index % RING_COLOR.length]} />
          <S.Name>
            {item.coinName}
          </S.Name>
          <S.Ratio>
            {`${convertToFixed(item.ratio, 2)}%`}
          </S.Ratio>
        </S.Detail>
      ))}
    </S.DetailContainer>
  );
};

const Ring = () => {
  const [invertData, setInvertData] = useState();
  const { leaderInvestRatio } = useWalletData();

  useEffect(() => {
    setInvertData(leaderInvestRatio);

  }, [leaderInvestRatio]);

  return (
    <S.Container>
      {invertData && (
        <>
          <S.PieChart width={200} height={200}>
            <S.Pie
              data={sortPieObjArr(invertData)}
              innerRadius={40}
              outerRadius={80}
              paddingAngle={0}
              startAngle={90}
              endAngle={450}
              dataKey={'ratio'}
            >
              {sortPieObjArr(invertData).map((entry, index) => (
                <S.Cell
                  key={`cell-${index}`}
                  fill={RING_COLOR[index % RING_COLOR.length]}
                />
              ))}
            </S.Pie>
          </S.PieChart>
          <RingDetail
            data={sortPieObjArr(invertData)}
            style={{ width: '400px' }}
          />
        </>
      )}
    </S.Container>
  );
};

export default Ring;
