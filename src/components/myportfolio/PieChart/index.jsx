import {
  PieChart,
  Pie,
  Cell,
  Label,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import * as S from '@components/myportfolio/style';

const RADIAN = Math.PI / 180;
const COLORS = ['#956E96', '#7CB3C8', '#50bcdf', '#90d5eb', '#e0f3f9'];

const YieldPieChart = () => {
  const data = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
  ];

  return (
    <S.PieChartContainer>
      <ResponsiveContainer>
        <PieChart width={300} height={300}>
          <Pie
            data={data}
            cx="40%"
            cy="50%"
            labelLine={false}
            label={({
              cx,
              cy,
              midAngle,
              innerRadius,
              outerRadius,
              percent,
            }) => {
              const radius = innerRadius + (outerRadius - innerRadius) * 0.2;
              const x = cx + radius * Math.cos(-midAngle * RADIAN);
              const y = cy + radius * Math.sin(-midAngle * RADIAN);
              return (
                <text
                  x={x}
                  y={y}
                  fill="white"
                  textAnchor={x > cx ? 'start' : 'end'}
                  dominantBaseline="central"
                >
                  {`${(percent * 100).toFixed(0)}%`}
                </text>
              );
            }}
            innerRadius={45}
            outerRadius={90}
            fill="#8884d8"
            dataKey="value"
            isAnimationActive
          >
            {data.map((entry, index) => {
              return (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              );
            })}
          </Pie>
          <Legend layout="vertical" verticalAlign="bottom" align="right" iconType="circle" iconSize={10} />
        </PieChart>
      </ResponsiveContainer>
    </S.PieChartContainer>
  );
};

export default YieldPieChart;
