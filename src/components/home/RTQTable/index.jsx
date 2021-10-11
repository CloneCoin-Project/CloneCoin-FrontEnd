import { useTickerSocket } from '@hooks';
import {
  parseToDataSource,
  tickerColumns,
  isObjectEmpty,
} from '@/utils/bithumbUtils';

import * as S from '@components/home/RTQTable/style';
import { Divider } from '@components/home/Filter/style';
import { TABLE_TITLE, SCROLL_DOWN } from '@assets/string';

const RTQTable = () => {
  const { currentTickers } = useTickerSocket();

  return (
    <>
      <S.DividerContainer>
        <S.Ribbon text={SCROLL_DOWN}>
          <Divider orientation="left">{TABLE_TITLE}</Divider>
        </S.Ribbon>
      </S.DividerContainer>
      <S.TableContainer>
        {!isObjectEmpty(currentTickers) && (
          <S.Table
            columns={tickerColumns}
            dataSource={parseToDataSource(currentTickers)}
            pagination={false}
          />
        )}
      </S.TableContainer>
    </>
  );
};

export default RTQTable;
