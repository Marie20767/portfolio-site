// Import styles
import styled from 'styled-components';
// Import React Router Link and Location
import { Link, useLocation } from 'react-router-dom';
// Import animations
import { motion } from 'framer-motion';

const Nav = () => {
  const { pathname } = useLocation();

  return (
    <StyledNav>
      <ul>
        <li>
          <Link to="/">About</Link>
          <Line
            transition={{ duration: 0.15 }}
            initial={{ width: '0%' }}
            animate={{ width: pathname === '/' ? '35%' : '0%' }} />
        </li>
        <li>
          <Link to="/work">Work</Link>
          <Line
            transition={{ duration: 0.15 }}
            initial={{ width: '0%' }}
            animate={{ width: pathname === '/work' ? '35%' : '0%' }} />
        </li>
        <li>
          <Link to="/contact">Contact</Link>
          <Line
            transition={{ duration: 0.15 }}
            initial={{ width: '0%' }}
            animate={{ width: pathname === '/contact' ? '35%' : '0%' }} />
        </li>
      </ul>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  min-height: 10vh;
  padding: 1rem 6rem;
  background-color: #282828;
  position: sticky;
  top: 0;
  z-index: 5;

  ul {
    display: flex;
    justify-content: flex-end;
    list-style: none;
  }

  li {
    padding-left: 10rem;
    padding-top: 0.5rem;
    position: relative;

  }

  a { 
    color: white;
    text-decoration: none;
    font-weight: bolder
  }
`;

const Line = styled(motion.div)`
  height: 0.3rem;
  width: 0%;
  position: absolute;
  background-color: #384395;
  bottom: -40%;
  left: 70%;
`;

export default Nav;
