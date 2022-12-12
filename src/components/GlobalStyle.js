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
    overflow-y: hidden;
  }

  button {
    font-weight: bolder;
    cursor: pointer;
    padding: 0.5rem 1rem;
    border: 2px solid #bc5481;
    background-color: #1b1b1b;;
    color: white;
    transition: all 0.5s ease;
    font-family: 'Mulish', sans-serif;
    font-size: 1rem;
    user-select: none;
    -webkit-tap-highlight-color: transparent;
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
      font-size: 35px;
    }
    h2 {
      font-size: 1.7rem;
    }
    p {
      font-size: 20px;
      line-height: 150%;
    }
    button {
      padding: 10px 20px;
    }
    a {
      font-size: 1.5rem;
    }
  }

  @media screen and (min-width: 1024px) {
    h1 {
      font-size: 55px;
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
      font-size: 25px;
      line-height: 150%;
    }
    a {
      font-size: 20px;
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

  // Ensures that the hover effect is only active for desktop displays
  @media(hover: hover) and (pointer: fine) {
    button:hover {
      background-color: #bc5481;
      color: white;
    }
  }
`;

export default GlobalStyle;
