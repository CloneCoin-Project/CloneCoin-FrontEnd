import { useState, useCallback } from 'react';

import { useTickerSocket } from '@hooks';
import { parseToDataSource, tickerColumns } from '@utils/bithumb';

import Icon from '@components/common/Icon';
import * as S from '@components/layout/header/RTQDrawer/style';
import { DRAWER_TITLE } from '@assets/string';

const RTQDrawer = () => {
  const [visible, setVisible] = useState(false);
  const { currentTickers } = useTickerSocket();

  const showDrawer = useCallback(() => {
    setVisible(true);
  }, []);

  const onClose = useCallback(() => {
    setVisible(false);
  }, []);

  return (
    <>
      <S.IconContainer onClick={showDrawer}>
        <Icon name="bitcoin" />
      </S.IconContainer>
      {visible && (
        <S.Drawer
          title={DRAWER_TITLE}
          placement="right"
          mask={false}
          onClose={onClose}
          visible={visible}
          width={345}
        >
          <S.Table
            columns={tickerColumns}
            dataSource={parseToDataSource(currentTickers)}
            pagination={false}
          />
        </S.Drawer>
      )}
    </>
  );
};

export default RTQDrawer;
