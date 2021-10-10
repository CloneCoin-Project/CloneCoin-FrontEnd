import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

import { useWalletData } from '@hooks';
import * as S from '@components/leaderportfolio/LineChart/style';

const YieldLineChart = () => {
  const { chartLeaderProfit } = useWalletData();

  return (
    <S.LineChartContainer>
      <ResponsiveContainer>
        <LineChart
          width={500}
          height={300}
          data={chartLeaderProfit}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey={'date'} />
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
