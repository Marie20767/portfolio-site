import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, #root, body, .App {
    /* @media screen and (max-width: 1024px) {
      height: 93vh;
    }
    @media screen and (max-height: 420px) {
      height: 110vh;
    }
    @media screen and (min-width: 768px) and (max-height: 900px) {
      height: 105vh;
    } */
  }

  body {
    background-color: #1b1b1b;
    font-family: 'Mulish', sans-serif;
    font-weight: lighter;
    overflow-x: hidden;
    ${(props) => props.path === '/work' ? '' : 'overflow-y: hidden'};
  }

  button {
    font-weight: bolder;
    cursor: pointer;
    padding: 0.5rem 1rem;
    border: 2px solid #bc5481;
    background-color: transparent;
    color: white;
    transition: all 0.5s ease;
    font-family: 'Mulish', sans-serif;
    font-size: 1rem;

    &:hover {
      background-color: #bc5481;
      color: white;
    }
  }

  h1 {
    font-weight: lighter;
    font-size: 1.8rem;
    font-family: 'Merriweather', serif;
  }

  h2 {
    font-size: 1rem;
    font-family: 'Merriweather', serif;
  }

  p {
    color: #ccc;
  }

  span {
    font-weight: bold;
    color: #384395;
    padding-left: 2%;
  }

  a {
    font-size: 0.9rem;
  }

  /* For phones with taller screens */
  @media screen and (min-height: 800px) {
    p {
      font-size: 130%;
    }
  }

  @media screen and (min-width: 768px) {
    h1 {
      font-size: 3.5rem;
    }
    h2 {
      font-size: 1.7rem;
    }
    p {
      font-size: 2rem;
      line-height: 150%;
    }
    button {
      font-size: 1.6rem;
      padding: 1rem 2rem;
    }
    a {
      font-size: 1.5rem;
    }
  }

  // For landscape oriented tablets
  @media screen and (min-width: 768px) and (max-height: 900px) {
    body {
      overflow-y: scroll;
    }
    h1 {
      font-size: 2.5rem;
    }
    h2 {
      font-size: 1.3rem;
    }
    a {
      font-size: 1.1rem;
    }
    button {
      font-size: 1rem;
      padding: 0.7rem 1rem;
    }
  }

  @media screen and (min-width: 1024px) {
    h1 {
      font-size: 4rem;
    }
    h2 {
    font-size: 1.6rem;
    }
    button {
      font-size: 1.1rem;
      padding: 1rem 2rem;
    }
    p {
    padding: 3rem 0rem;
    font-size: 1.4rem;
    line-height: 150%;
    }
    span {
    padding: 0%;
    }
    a {
    font-size: 1.1rem;
    }
  }

  // For landscape oriented mobile
  @media screen and (max-height: 420px) {
    body {
      overflow-y: scroll;
    }
    h1 {
      font-size: 170%;
    }
    p {
      font-size: 1rem;
    }
    a {
      font-size: 0.9rem;
    }
  }

  // For portrait oriented mobile
  @media screen and (max-width: 420px) {
    body {
      overflow-y: hidden;
    }
  }
`;

export default GlobalStyle;
