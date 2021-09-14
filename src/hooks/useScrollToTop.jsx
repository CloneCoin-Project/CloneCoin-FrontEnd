import { useEffect } from 'react';
import { useLocation } from 'react-router';

const useScrollToTop = ({ targetElement, children }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    if (!targetElement) return;
    targetElement.scrollTo(0, 0);
  }, [targetElement, pathname]);

  return <>{children}</>;
};

export default useScrollToTop;
