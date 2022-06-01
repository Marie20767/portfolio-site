// Import styles
import styled from 'styled-components';
// Import images
import placeHolder from '../images/PlaceholderImage.jpeg';

const MyWorkItem = ({
  title,
  description,
  imageAlt,
}) => {
  return (
    <Project>
      <a href="https://www.google.com/" target="_blank" rel="noreferrer">
        <img src={placeHolder} alt={imageAlt} />
        <ProjectInfo>
          <h2>{title}</h2>
          <div className="line" />
          <p className="tech-stack-text">{description}</p>
        </ProjectInfo>
      </a>
    </Project>
  );
};

const Project = styled.div`
  padding-bottom: 4.18rem;
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

export default MyWorkItem;
