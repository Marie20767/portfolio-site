// Import stlyed components
import styled from 'styled-components';
// Import animations
import { motion } from 'framer-motion';
import { PageAnimation } from '../animation';
// Import images
import placeHolder from '../images/PlaceholderImage.jpeg';
// TODO:
// for each portfolio example re-use the same component
// Make each project example smaller
// Put the dot in tech stack in the middle

const MyWork = () => {
  return (
    <Work
      variants={PageAnimation}
      initial="hidden"
      animate="show"
      exit="exit">
      <Project>
        <a href="https://www.google.com/" target="_blank" rel="noreferrer">
          <img src={placeHolder} alt="Marie's Music Player" />
          <ProjectInfo>
            <h2>Music Player App</h2>
            <div className="line" />
            <p className="tech-stack-text">Tech stack: React. SASS. HTML</p>
          </ProjectInfo>
        </a>
      </Project>
      <Project>
        <a href="https://www.google.com/" target="_blank" rel="noreferrer">
          <img src={placeHolder} alt="Marie's Game App" />
          <ProjectInfo>
            <h2>Game App</h2>
            <div className="line" />
            <p className="tech-stack-text">Tech stack: React. SASS. HTML</p>
          </ProjectInfo>
        </a>
      </Project>
      <Project>
        <a href="https://www.google.com/" target="_blank" rel="noreferrer">
          <img src={placeHolder} alt="Marie's Unknown App" />
          <ProjectInfo>
            <h2>Unknown App</h2>
            <div className="line" />
            <p className="tech-stack-text">Tech stack: React. SASS. HTML</p>
          </ProjectInfo>
        </a>
      </Project>
    </Work>
  );
};

const Work = styled(motion.div)`
  min-height: 100vh;
  margin: 8rem 20rem;
  /* overflow: hidden; */
`;

const Project = styled.div`
  padding-bottom: 4.5rem;
  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: white;
    transition: all .3s ease-in-out;

    &:hover{
      transform: scale(1.1);
    }
    
  }
  img {
    margin-right: 3rem;
    border-radius: 50%;
    width: 28vh;
    height: 28vh;
    object-fit: cover;
  }


`;

const ProjectInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 28vh;
  .line {
    height: 0.28rem;
    background-color: #384395;
    margin-bottom: 0.5rem;
    margin-top: 0.2rem;
  }
  .tech-stack-text {
    padding: 0;
  }
`;

export default MyWork;
