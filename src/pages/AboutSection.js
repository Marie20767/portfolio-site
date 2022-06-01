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
            <motion.div>
              <h1>Hi, I&apos;m Marie.</h1>
              <h1>I&apos;m a <span>front-end</span></h1>
              <h1>web developer.</h1>
            </motion.div>
            <p>I have a background in hospitality. In other words, <br /> I went to hotel school and returned a programmer.<br />Oops...</p>
            <button type="button">View my work</button>
          </Description>
          <Image>
            <img src={avatar} alt="Avatar of Marie" />
          </Image>
        </About>
      </motion.div>
    </>
  );
};

// Styled components
// the html element with a className "about" is a div
const About = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 5rem 10rem;
  color: white;
`;

const Description = styled.div`
  flex: 1;
  padding-right: 5rem;
  h2 {
    font-weight: lighter
  }
`;

const Image = styled.div`
  overflow: hidden;
  z-index: 1;
  img {
    width: 48vh;
    height: 48vh;
    border-radius: 50%;
  }
`;

export default AboutSection;
