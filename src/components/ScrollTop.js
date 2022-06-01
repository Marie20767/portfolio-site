import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollTop = () => {
  // To make sure that view starts from the top everytime the page changes
  const { pathname } = useLocation;

  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
    });
  }, [pathname]);

  return null;
};

export default ScrollTop;
