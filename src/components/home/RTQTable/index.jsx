import { useTickerSocket } from '@hooks';
import { parseToDataSource, tickerColumns } from '@utils/bithumb';

import * as S from '@components/home/RTQTable/style';

import { TABLE_TITLE, SCROLL_DOWN } from '@assets/string';

const RTQTable = () => {
  const { currentTickers } = useTickerSocket();

  return (
    <>
      <S.DividerContainer>
        <S.Ribbon text={SCROLL_DOWN}>
          <S.Divider orientation="left">{TABLE_TITLE}</S.Divider>
        </S.Ribbon>
      </S.DividerContainer>
      <S.TableContainer>
        <S.Table
          columns={tickerColumns}
          dataSource={parseToDataSource(currentTickers)}
          pagination={false}
        />
      </S.TableContainer>
    </>
  );
};

export default RTQTable;
