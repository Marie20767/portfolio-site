// Import styled components
import styled from 'styled-components';
// Import images
import avatar from '../images/avatar.png';

const AboutSection = () => {
  return (
    <About>
      <Description>
        <div className="title">
          <Hide>
            <h2>Hi, I&apos;m Marie.</h2>
          </Hide>
          <Hide>
            <h2>I&apos;m a <span>front-end</span></h2>
          </Hide>
          <Hide>
            <h2>web developer.</h2>
          </Hide>
        </div>
        <p>I have a background in hospitality. In other words, <br /> I went to hotel school and returned a programmer.<br />Oops...</p>
        <button type="button">View my work</button>
      </Description>
      <Image>
        <img src={avatar} alt="Avatar of Marie" />
      </Image>
    </About>
  );
};

// Styled components
// the html element with a className "about" is a div
const About = styled.div`
  height: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: space-between;
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
  flex: 1;
  overflow: hidden;
  img {
    width: 100%;
    height: 70vh;
  }
`;

const Hide = styled.div`
  overflow: hidden;
`

export default AboutSection;
