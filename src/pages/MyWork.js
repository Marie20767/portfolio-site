// Import stlyed components
import styled from 'styled-components';
// Import images
import placeHolder from '../images/PlaceholderImage.jpeg';
// TODO:
// for each portfolio example re-use the same component
// hover effect: when you hover over the div the image gets larger just to make it clear it's clickable
// If you click anywhere on the div it brings you to the project site
// Add tech stack: React. Sass. HTML.

const MyWork = () => {
  return (
    <Work>
      <Project>
        <a href="https://www.google.com/">
          <img src={placeHolder} alt="Marie's Music Player" />
          <ProjectInfo>
            <h2>Music Player App</h2>
            <div className="line" />
            <p>Tech stack: React. SASS. HTML</p>
          </ProjectInfo>
        </a>
      </Project>
      <Project>
        <a href="https://www.google.com/">
          <img src={placeHolder} alt="Marie's Game App" />
          <ProjectInfo>
            <h2>Game App</h2>
            <div className="line" />
            <p>Tech stack: React. SASS. HTML</p>
          </ProjectInfo>
        </a>
      </Project>
      <Project>
        <a href="https://www.google.com/">
          <img src={placeHolder} alt="Marie's Unknown App" />
          <ProjectInfo>
            <h2>Unknown App</h2>
            <div className="line" />
            <p>Tech stack: React. SASS. HTML</p>
          </ProjectInfo>
        </a>
      </Project>
    </Work>
  );
};

const Work = styled.div`
  min-height: 100vh;
  margin: 3rem 20rem;
  /* overflow: hidden; */
`;

const Project = styled.div`
  padding-bottom: 4rem;
  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: white;
  }
  img {
    margin-right: 3rem;
    border-radius: 50%;
    width: 35vh;
    height: 35vh;
    object-fit: cover;
  }

`;

const ProjectInfo = styled.div`
  display: flex;
  flex-direction: column;
  .line {
    height: 0.5rem;
    background-color: #384395;
    margin-bottom: 3rem;
  }
`;

export default MyWork;
