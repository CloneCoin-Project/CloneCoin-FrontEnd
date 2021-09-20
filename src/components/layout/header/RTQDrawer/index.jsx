import { useState, useCallback } from 'react';

import Icon from '@components/common/Icon';
import * as S from '@components/layout/header/RTQDrawer/style';
import { useTickerSocket, useTickerAllData } from '@hooks';
import { parseToDataSource } from '@utils/bithumb';

const columns = [
  {
    title: '종목',
    dataIndex: 'name',
    key: 'name',
    align: 'center',
  },
  {
    title: '현재가격',
    dataIndex: 'currentPrice',
    key: 'currentPrice',
    align: 'center',
    render: (currentPrice) => Number(currentPrice)?.toLocaleString(),
  },
  {
    title: '변동률',
    dataIndex: 'fluctuationRate',
    key: 'fluctuationRate',
    align: 'center',
    render: (fluctuationRate) =>
      fluctuationRate >= 0 ? (
        <span style={{ color: 'red' }}>{fluctuationRate}</span>
      ) : (
        <span style={{ color: 'blue' }}>{fluctuationRate}</span>
      ),
  },
];

const RTQDrawer = () => {
  const [visible, setVisible] = useState(false);
  const { getTickerAll } = useTickerAllData();
  const { currentTickers, connectionStart, connectionClose } =
    useTickerSocket();

  const showDrawer = useCallback(() => {
    setVisible(true);
    getTickerAll();
    connectionStart();
  }, []);

  const onClose = useCallback(() => {
    setVisible(false);
    connectionClose();
  }, []);

  return (
    <>
      <S.IconContainer onClick={showDrawer}>
        <Icon name="bitcoin" />
      </S.IconContainer>
      <S.Drawer
        title="현재 코인의 시세는?"
        placement="right"
        mask={false}
        onClose={onClose}
        visible={visible}
        width={345}
      >
        <S.Table
          columns={columns}
          dataSource={parseToDataSource(currentTickers)}
          pagination={false}
        />
      </S.Drawer>
    </>
  );
};

export default RTQDrawer;
