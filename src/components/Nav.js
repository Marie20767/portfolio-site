// Import styles
import styled from 'styled-components';
// Import React Router Link and Location
import { Link, useLocation } from 'react-router-dom';
// Import animations
import { motion } from 'framer-motion';

const lineWidth = '130%';

const Nav = () => {
  const { pathname } = useLocation();

  return (
    <StyledNav>
      <ul>
        <li>
          <Link to="/">About</Link>
          <Line
            transition={{ duration: 0.15 }}
            initial={{ width: lineWidth }}
            animate={{ width: pathname === '/' ? lineWidth : '0%' }} />
        </li>
        <li>
          <Link to="/work">Work</Link>
          <Line
            transition={{ duration: 0.15 }}
            initial={{ width: '0%' }}
            animate={{ width: pathname === '/work' ? lineWidth : '0%' }} />
        </li>
        <li>
          <Link to="/contact">Contact</Link>
          <Line
            transition={{ duration: 0.15 }}
            initial={{ width: '0%' }}
            animate={{ width: pathname === '/contact' ? lineWidth : '0%' }} />
        </li>
      </ul>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  /* TODO: do the height in px because it looks too thin on Iphone */
  min-height: 7vh;
  background-color: #282828;
  position: sticky;
  top: 0;
  z-index: 5;
  display: flex;
  align-items: center;

  ul {
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex: 1;
    list-style: none;
  }

  li {
    position: relative;
  }

  a { 
    color: white;
    text-decoration: none;
    font-weight: bolder;
  }
  
  // For landscape oriented mobile
  @media screen and (max-height: 420px) {
    min-height: 10vh;
  }

  @media screen and (min-width: 1024px) {
    justify-content: flex-end;
    padding: 1rem 6rem;
    min-height: 10vh;
    ul {
      flex: 0;
    }
    a {
      font-size: 1.1rem;
    }
    li {
       margin-left: 10rem;
    }
  }
`;

const Line = styled(motion.div)`
  height: 0.18rem;
  position: absolute;
  background-color: #384395;
  bottom: -26%;
  left: -10%;
  @media screen and (min-width: 1024px) {
    height: 0.3rem;
    bottom: -40%;
  }

  @media screen and (min-width: 768px) {
    height: 0.3rem;
  }

  @media screen and (max-height: 420px) {
    height: 0.16rem;
  }
`;

export default Nav;
