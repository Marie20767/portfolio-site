// Import styled components
import styled from 'styled-components';
// Import animations
import { motion } from 'framer-motion';
import { PageAnimation } from '../animation';
// Import images
import avatar from '../images/MyAvatar.jpg';

const AboutSection = () => {
  return (
    <motion.div variants={PageAnimation} initial="hidden" animate="show" exit="exit">
      <About>
        <Description>
          <motion.div>
            <Hide>
              <motion.h1>
                Hi, I&apos;m Marie.
              </motion.h1>
            </Hide>
            <Hide>
              <motion.h1>I&apos;m a <span>front-end</span></motion.h1>
            </Hide>
            <Hide>
              <motion.h1>web developer.</motion.h1>
            </Hide>
          </motion.div>
          <p>I have a background in hospitality. In other words, <br /> I went to hotel school and returned a programmer.<br />Oops...</p>
          <button type="button">View my work</button>
        </Description>
        <Image>
          <img src={avatar} alt="Avatar of Marie" />
        </Image>
      </About>
    </motion.div>
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
  img {
    width: 48vh;
    height: 48vh;
    border-radius: 50%;
  }
`;

const Hide = styled.div`
  overflow: hidden;
`;

export default AboutSection;
