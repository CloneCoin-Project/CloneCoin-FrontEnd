import { useCallback } from 'react';
import { useNavigate } from 'react-router';

import * as S from '@components/layout/header/Menu/style';
import { MY_PORT_FOLIO } from '@assets/string';

const MyPortfolio = () => {
  const navigate = useNavigate();

  const handleClick = useCallback(() => {
    navigate({ pathname: `/my` });
  }, [navigate]);

  return (
    <S.LinkButton type="link" onClick={handleClick} children={MY_PORT_FOLIO} />
  );
};

export default MyPortfolio;
