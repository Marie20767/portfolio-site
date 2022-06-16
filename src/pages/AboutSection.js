// Import styled components
import styled from 'styled-components';
// Import animations
import { motion } from 'framer-motion';
import { pageAnimation } from '../animation';
import Wave from '../components/Wave';
// Import images
import avatar from '../images/MyAvatar.jpg';
import ScrollTop from '../components/ScrollTop';

// TODO:
// Landscape mobile, hide paragraph and have title and pic next to each other
// Only show button underneath

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
              <h1>I&apos;m a <span>front-end</span></h1>
              <h1>web developer.</h1>
            </HeaderContainer>
            <MobileAndTabletImage>
              <img src={avatar} alt="Avatar of Marie" />
            </MobileAndTabletImage>
            <p>I have a background in hospitality.<br />In other words, I went to hotel school<br />and returned a programmer.<br />Oops...</p>
            <button type="button">View my work</button>
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

  @media screen and (max-width: 1024px) {
    height: 93vh;
  }
  @media screen and (max-height: 420px) {
    height: 110vh;
  }

  @media screen and (min-width: 1024px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5rem 10rem;
  }
`;

const HeaderContainer = styled(motion.div)`
  margin-top: 8%;

  h1 {
  display: flex;
  justify-content: center;
  }

  @media screen and (min-width: 768px) {
    margin-top: 2%;
  }

  @media screen and (min-width: 1024px) {
  margin-top: 0%;

  h1 {
  display: block;
  margin-top: 0%;
  }
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
      margin-top: 0%
    }
  }

  @media screen and (min-width: 1024px) {
    padding-right: 5rem;
    flex: 1;
    button {
    margin-top: 0%;
    align-self: flex-start;
    }
  }

  @media screen and (max-width: 768px) {
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

  @media screen and (min-width: 768px) {
    img {
      width: 45%;
    }
  }

  @media screen and (min-width: 768px) and (max-height: 900px) {
    img {
      width: 30%;
    }
  }

  @media screen and (max-height: 420px) {
    img {
      width: 25%;
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

  // For landscape oriented tablets
  @media screen and (min-width: 768px) and (max-height: 900px) {
  }

  // For landscape oriented mobile
  @media screen and (max-height: 420px) {
  }
`;

export default AboutSection;
