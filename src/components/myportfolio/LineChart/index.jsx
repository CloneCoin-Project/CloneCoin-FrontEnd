import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

import { useUserData, useWalletData, usePortfolioData } from '@hooks';
import { STATUS_LEADER } from '@assets/string';
import * as S from '@components/myportfolio/style';

const YieldLineChart = () => {
  const { chartLeaderProfit } = useWalletData();
  const { chartNormalUserProfit } = usePortfolioData();
  const { userStatus } = useUserData();

  return (
    <S.LineChartContainer>
      <ResponsiveContainer>
        <LineChart
          width={500}
          height={300}
          data={
            userStatus === STATUS_LEADER
              ? chartLeaderProfit
              : chartNormalUserProfit
          }
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey={userStatus === STATUS_LEADER ? 'date' : 'localDate'}
          />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="profit"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </S.LineChartContainer>
  );
};

export default YieldLineChart;
