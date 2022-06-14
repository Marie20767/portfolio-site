// Import styles
import React from 'react';
import styled from 'styled-components';
// Import images
import placeHolder from '../images/PlaceholderImage.jpeg';
import workData from '../workData';

// TODO: if you scroll down on the work page and then refresh the page the animation makes the page go down instead of starting from the top

const MyWorkItem = ({
  image,
  title,
  techStack,
  imageAlt,
}) => {
  return (
    <Project>
      <a href="https://www.google.com/" target="_blank" rel="noreferrer">
        <img src={image || placeHolder} alt={imageAlt} />
        <ProjectInfo>
          <h2>{title}</h2>
          <div className="line" />

          <div className="tech-stack-container">
            {techStack.map((item, index) => {
              return (
                <React.Fragment key={item}>
                  <p className="tech-stack-text">{item}</p>
                  {index !== workData.length - 1
                    ? <Circle />
                    : null
                  }
                </React.Fragment>
              );
            })}
          </div>
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
  .tech-stack-container {
    display: flex;
    align-items: center;
  }
  .tech-stack-text {
    padding: 0;
  }
`;

const Circle = styled.div`
  width: 4px;
  height: 4px;
  line-height: 4px;
  border-radius: 50%;
  background: #FFF;
  margin: 0 7px;
`;

export default MyWorkItem;
