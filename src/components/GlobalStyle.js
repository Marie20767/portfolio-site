import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: #1b1b1b;
    font-family: 'Mulish', sans-serif;
    font-weight: lighter;
    overflow-x: hidden;
    ${(props) => props.path === '/work' ? '' : 'overflow-y: hidden'}
  }

  button {
    font-weight: bolder;
    font-size: 1.1rem;
    cursor: pointer;
    padding: 1rem 2rem;
    border: 2px solid #bc5481;
    background-color: transparent;
    color: white;
    transition: all 0.5s ease;
    font-family: 'Mulish', sans-serif;
    &:hover {
      background-color: #bc5481;
      color: white;
    }
  }

  h1 {
    font-weight: lighter;
    font-size: 4rem;
    font-family: 'Merriweather', serif;
  }

  h2 {
    font-size: 1.5rem;
    font-family: 'Merriweather', serif;
  }
  
  p {
    padding: 3rem 0rem;
    color: #ccc;
    font-size: 1.4rem;
    line-height: 150%;
  }

  span {
    font-weight: bold;
    color: #384395;
  }

  a {
    font-size: 1.1rem;
  }

  // Tablet
  @media screen and (min-width: 768px) {
    // Tablet rules here
  }

  // Desktop
  @media screen and (min-width: 1024px) {
    // Desktop rules here
  }

  // For landscape oriented tablets
  @media screen and (min-width: 768px) and (max-height: 700px) {
  }

  // For landscape oriented mobile
  @media screen and (max-height: 420px) {
  }
`;

export default GlobalStyle;
