import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <StyledNav>
      <ul>
        <li>
          <Link to="/">About</Link>
        </li>
        <li>
          <Link to="/work">Work</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
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

export default Nav;
