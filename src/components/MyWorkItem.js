// Import styles
import React from 'react';
import styled from 'styled-components';
// Import images
import placeHolder from '../images/PlaceholderImage.jpeg';

const MyWorkItem = ({
  image,
  title,
  techStack,
  url,
  imageAlt,
  isLast,
}) => {
  return (
    <Project>
      <a href={url} target="_blank" rel="noreferrer">
        <div className="image-container">
          <img src={image || placeHolder} alt={imageAlt} />
          {isLast ? null : <div className="scroll-indicator" />}
        </div>
        <ProjectInfo>
          <div className="title-container">
            <h2>{title}</h2>
            <div className="line" />
          </div>
          <div className="tech-stack-container">
            {techStack.map((item, index) => {
              return (
                <React.Fragment key={item}>
                  <p className="tech-stack-text">{item}</p>
                  {index !== techStack.length - 1
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
    justify-content: flex-start;
    width: 280px;
    text-decoration: none;
    color: white;

    &:hover {
      img {
        transform: scale(1.1);
      }
    }
  }

  img {
    border-radius: 50%;
    width: 100px;
    height: 100px;
    object-fit: cover;
    transition: all .2s ease-in-out;
  }

  p {
    font-size: 0.9rem;
  }

  .image-container {
    position: relative;
    margin-right: 20px;
  }

  .scroll-indicator {
    position: absolute;
    left: 50px;
    bottom: 25px;
    transform: rotate(90deg);
    transform-origin: left;
    height: 3px;
    width: 120px;
    background-color: #bc5481;
    z-index: -1;
  }

  @media screen and (min-width: 768px) {
    img {
      width: 180px;
      height: 180px;
    }

    .scroll-indicator {
      left: 90px;
      width: 200px;
      height: 5px;
    }

    p {
      font-size: 1.4rem;
    }

    a {
      width: 700px;
    }
  }

  @media screen and (max-height: 420px) {
    img {
      width: 80px;
      height: 80px;
    }

    .scroll-indicator {
      left: 40px;
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

    .scroll-indicator {
      left: 14vh;
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

  .title-container {
    align-self: flex-start;
  }

  .line {
    height: 0.18rem;
    background-color: #384395;
    margin: 0.2rem 0;
  }

  .tech-stack-container {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
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
    .tech-stack-container {
      flex-direction: row;
      align-items: center;
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
  display: none;

  @media screen and (min-width: 768px) {
    display: block;
    width: 4px;
    height: 4px;
    line-height: 4px;
  }
`;

export default MyWorkItem;
