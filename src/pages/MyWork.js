// Import stlyed components
import styled from 'styled-components';
// Import animations
import { motion } from 'framer-motion';
import { pageAnimation } from '../animation';
// Import images
import MyWorkItem from '../components/MyWorkItem';
// Import portfolio projects
import workData from '../workData';

const MyWork = () => {
  return (
    <Work
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit">
      {workData.map((project) => {
        return (
          <MyWorkItem
            key={project.title}
            image={project.image}
            title={project.title}
            imageAlt={project.imageAlt}
            techStack={project.techStack} />
        );
      })}
    </Work>
  );
};

const Work = styled(motion.div)`
  min-height: 93vh;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 1024px) {
    padding-top: 10%;
  }

  @media screen and (min-width: 1024px) {
    min-height: 100vh;
  }
 
`;

export default MyWork;
