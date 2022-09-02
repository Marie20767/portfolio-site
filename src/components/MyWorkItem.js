// Import styles
import React from 'react';
import styled from 'styled-components';

const MyWorkItem = ({
  image,
  title,
  techStack,
  url,
  imageAlt,
  githubLink,
  isLast,
}) => {
  const onClickOpenGithubLink = () => {
    window.open(githubLink, '_blank');
  };

  return (
    <Project>
      <a href={url} target="_blank" rel="noreferrer">
        <div className="image-container">
          <img src={image} alt={imageAlt} />
          {isLast ? null : <div className="scroll-indicator" />}
        </div>
        <ProjectInfo>
          <div className="title-container">
            <div className="title-content">
              <h2>{title}</h2>
              <button type="button" onClick={onClickOpenGithubLink}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  // width="27"
                  // height="27"
                  fill="#384395"
                  className="bi bi-github"
                  viewBox="0 0 16 16">
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                </svg>
              </button>
            </div>
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

  button {
    padding: 0;
    border: none;
    background-color: none;
    width: 18px;
    height: 18px;
    margin-left: 5px;
  }

  h2 {
    font-size: 0.9rem;
  }

  @media screen and (min-width: 768px) {

    button {
      width: 27px;
      height: 27px;
      margin-left: 10px;
    }

    h2 {
      font-size: 1.7rem;
    }
  }

  @media screen and (min-width: 1024px) {
    h2 {
      font-size: 1.6rem;
    }
  }

  @media(hover: hover) and (pointer: fine) {
    button:hover {
      background-color: transparent;
      color: none;

      .bi-github {
        fill: #bc5481;
      }
    }
  }

  .title-container {
    align-self: flex-start;
  }

  .title-content {
    display: flex;
    flex-direction: row;
    align-items: center;
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
