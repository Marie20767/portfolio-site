// Import styled components
import styled from 'styled-components';
// Import animations
import { motion } from 'framer-motion';
import { pageAnimation } from '../animation';
import Wave from '../components/Wave';
// Import images
import avatar from '../images/MyAvatar.jpg';
import ScrollTop from '../components/ScrollTop';

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
            <MobileImage>
              <img src={avatar} alt="Avatar of Marie" />
            </MobileImage>
            <p>I have a background in hospitality. In other words, <br /> I went to hotel school and returned a programmer.<br />Oops...</p>
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
  @media screen and (max-width: 768px) {
    height: 93vh;
  }
  display: flex;
  /* Media queries */
  // Desktop
  @media screen and (min-width: 1024px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5rem 10rem;
  }
`;

const HeaderContainer = styled(motion.div)`
  margin-top: 5%;
  h1 {
  display: flex;
  justify-content: center;
  }
  /* Media queries */
  /* Desktop */
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
  justify-content: space-around;
  button {
    margin-top: -10%;
  }
  /* Media queries */
  /* Desktop   */
  @media screen and (min-width: 1024px) {
    padding-right: 5rem;
    flex: 1;
    button {
    margin-top: 0%;
    }
  }
`;

const MobileImage = styled.div`
  z-index: 1;
  display: flex;
  justify-content: center;
  img {
    width: 50%;
    border-radius: 50%;
  }
  
  /* Media queries */
  /* Desktop and tablet */
  @media screen and (min-width: 768px) {
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

  /* Media queries */
   // Tablet
   @media screen and (min-width: 768px) {
    display: block;
  }

  // For landscape oriented tablets
  @media screen and (min-width: 768px) and (max-height: 700px) {
  }

  // For landscape oriented mobile
  @media screen and (max-height: 420px) {
  }
`;

export default AboutSection;
