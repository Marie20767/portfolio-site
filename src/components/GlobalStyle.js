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
    font-size: 3.5vh;
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
  }

  a {
    font-size: 0.9rem;
    text-decoration: none;
    color: white;
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

  @media screen and (min-width: 1024px) {
    h1 {
      font-size: 3rem;
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
    a {
      font-size: 1.1rem;
    }
  }

  // For landscape oriented mobile
  @media screen and (max-height: 420px) {
    h1 {
      font-size: 2.3rem;
    }
    p {
      font-size: 1rem;
    }
    button {
      font-size: 3.5vh;
    }
    a {
      font-size: 0.9rem;
    }
  }

  @media(hover: hover) and (pointer: fine) {
      nav a:hover {
          background: yellow;
      }
  }
`;

export default GlobalStyle;
