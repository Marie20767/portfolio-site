// Import animations
import { motion } from 'framer-motion';
import { PageAnimation } from '../animation';

const Contact = () => {
  return (
    <motion.div
      style={{ background: '#fff' }}
      variants={PageAnimation}
      initial="hidden"
      animate="showContact"
      exit="exit">
      <h1>Contact Me</h1>
    </motion.div>
  );
};

export default Contact;
