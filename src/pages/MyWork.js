// Import stlyed components
import styled from 'styled-components';
// Import animations
import { motion } from 'framer-motion';
import { pageAnimation } from '../animation';
// Import images
import MyWorkItem from '../components/MyWorkItem';
// Import portfolio projects
import workData from '../workData';

// TODO:
// Put the dot in tech stack in the middle

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
            description={project.description} />
        );
      })}
    </Work>
  );
};

const Work = styled(motion.div)`
  min-height: 100vh;
  margin: 8rem 20rem;
`;

export default MyWork;
