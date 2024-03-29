import styled from 'styled-components';
import { motion } from 'framer-motion';

const Wave = () => {
  return (
    <WaveSvg
      viewBox="0 0 1440 363"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <motion.path
        initial={{ pathLength: 0, pathOffset: 1 }}
        animate={{ pathLength: 1, pathOffset: 0 }}
        transition={{ duration: 0.65, delay: 0.5 }}
        exit={{ pathLength: 0, pathOffset: 1, transition: { duration: 0.4 } }}
        d="M1440 27.4774C1352.73 19.8184 1122.41 49.0556 899.331 227.276C620.48 450.052 354.282 355.647 170.328 185.318C23.165 49.0556 -4.21721 8.32998 0.487081 5"
        stroke="#bc5481"
        strokeOpacity="0.3" />
    </WaveSvg>
  );
};

const WaveSvg = styled.svg`
  position: absolute;
  left: 0;
  top: 35%;
  z-index: -1;
  stroke-width: 12px;

  @media screen and (min-width: 768px) {
    top: 25%;
  }

  @media screen and (min-width: 1024px) {
    top: 23%;
    stroke-width: 5px;
  }

  @media screen and (max-height: 420px) {
    display: none;
  }
`;

export default Wave;
