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
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    text-decoration: none;
    color: white;
    transition: all .3s ease-in-out;

    &:hover{
      transform: scale(1.1);
    }
    
  }
  img {
    margin-right: 5%;
    border-radius: 50%;
    width: 110px;
    height: 110px;
    object-fit: cover;
  }

  p {
    font-size: 0.9rem;
  }

  @media screen and (min-width: 768px) {
    img {
      width: 200px;
      height: 200px;
    }
    p {
      font-size: 1.4rem;
    }
  }

  @media screen and (min-width: 768px) and (max-height: 900px) {
    img {
      width: 120px;
      height: 120px;
    }
  }

  @media screen and (max-height: 420px) {
    img {
      width: 80px;
      height: 80px;
    }
  }

  @media screen and (max-width: 1024px) {
    padding-bottom: 3rem;
  }

  @media screen and (min-width: 1024px) {
    margin-bottom: 4.18rem;
    margin-top: 4rem;
    img {
      margin-right: 3rem;
      width: 28vh;
      height: 28vh;
    }
    p {
      font-size: 1.4rem;
    }
  }
`;

const ProjectInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  .line {
    height: 0.18rem;
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

  @media screen and (min-width: 1024px) {
    .line {
      height: 0.28rem;
    }
  }
  @media screen and (min-width: 768px) {
    .line {
      height: 0.23rem;
    }
  }

  @media screen and (max-height: 420px) {
    .line {
      height: 0.16rem;
    }
  }
`;

const Circle = styled.div`
  background: #FFF;
  margin: 0 7px;
  width: 2px;
  height: 2px;
  line-height: 2px;
  border-radius: 50%;

  @media screen and (min-width: 768px) {
  width: 4px;
  height: 4px;
  line-height: 4px;
  }

  @media screen and (min-width: 768px) and (max-height: 900px) {
  width: 3px;
  height: 3px;
  line-height: 3px;
  }
`;

export default MyWorkItem;
