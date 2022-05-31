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
`;

export default GlobalStyle;
