import { useRef } from 'react';

import * as S from '@pages/layout/content/style';
import { useScrollToTop as ScrollToTop } from '@hooks';

const LayoutPageContent = ({ children }) => {
  const contentBodyEl = useRef(null);
  return (
    <S.LayoutPageContent>
      <ScrollToTop targetElement={contentBodyEl.current}>
        {children}
      </ScrollToTop>
    </S.LayoutPageContent>
  );
};

export default LayoutPageContent;
