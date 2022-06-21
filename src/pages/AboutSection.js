// Import React Router
import { Link } from 'react-router-dom';
// Import styled components
import styled from 'styled-components';
// Import animations
import { motion } from 'framer-motion';
import { pageAnimation } from '../animation';
import Wave from '../components/Wave';
// Import images
import avatar from '../images/MyAvatar.jpg';
import ScrollTop from '../components/ScrollTop';
import Button from '../components/Button';

const AboutSection = () => {
  return (
    <>
      <Wave />
      <ScrollTop />
      <motion.div variants={pageAnimation} initial="hidden" animate="showAbout" exit="exit">
        <About>
          <Description>
            <HeaderContainer>
              <h1>Hi, I&apos;m Marie.</h1>
              <h1>I&apos;m a<span>&nbsp;front-end</span></h1>
              <h1>web developer.</h1>
            </HeaderContainer>
            <MobileAndTabletImage>
              <img src={avatar} alt="Avatar of Marie" />
            </MobileAndTabletImage>
            <p>I have a background in hospitality.<br />In other words, I went to hotel school<br />and returned a programmer.<br />Oops...</p>
            <Button>
              <Link to="/work">View my work</Link>
            </Button>
          </Description>
          <DesktopImage>
            <img src={avatar} alt="Avatar of Marie" />
          </DesktopImage>
        </About>
      </motion.div>
    </>
  );
};

// Styled components
// the html element with a className "about" is a div
const About = styled.div`
  color: white;
  display: flex;
  height: 93vh;

  @media screen and (min-width: 1024px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media screen and (max-height: 420px) {
    display: flex;
    justify-content: center;
  }
`;

const HeaderContainer = styled(motion.div)`
  margin-top: 10%;

  h1 {
  display: flex;
  justify-content: center;
  }

  @media screen and (min-width: 1024px) {
  margin-top: 0%;

  h1 {
  display: block;
  margin-top: 0%;
   }

  }

  @media screen and (max-height: 420px) {
    margin-top: 15%;
    margin-bottom: 13%;
  }
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;

  button {
    align-self: center;
  }

  @media screen and (max-height: 420px) {
    button {
      margin-top: -5%;
    }
    
    p {
      display: none;
    }
  }

  @media screen and (min-width: 1024px) {
    padding-right: 12vw;

    button {
      margin-top: 0%;
      align-self: flex-start;
    }
  }

  @media screen and (max-width: 1024px) {
    p {
      margin-bottom: 2rem;
      text-align: center;
    }
  }
`;

const MobileAndTabletImage = styled.div`
  z-index: 1;
  display: flex;
  justify-content: center;

  img {
    width: 42%;
    border-radius: 50%;
    margin: 1.5rem 0;
  }

  @media screen and (max-height: 420px) {
    img {
      display: none;
    }
  }

  @media screen and (min-width: 1024px) {
    display: none;
  }
`;

const DesktopImage = styled.div`
  display: none;
  overflow: hidden;
  z-index: 1;

  img {
    width: 48vh;
    height: 48vh;
    border-radius: 50%;
  }

   @media screen and (min-width: 1024px) {
    display: block;
  }
`;

export default AboutSection;
