// Import useState
import { useState } from 'react';
// Import styles
import styled from 'styled-components';

const Button = ({ children, type = 'button' }) => {
  const [isButtonActive, setIsButtonActive] = useState(false);

  const onButtonTouchStart = () => {
    // Ensure there is some feedback on the button for mobile/tablet (since there is no hover effect)
    setIsButtonActive(true);
  };

  const onButtonTouchEnd = () => {
    setIsButtonActive(false);
  };

  return (
    <ButtonStyle
      onTouchStart={onButtonTouchStart}
      onTouchEnd={onButtonTouchEnd}
      $isButtonActive={isButtonActive}
      type={type}>
      {children}
    </ButtonStyle>
  );
};

const ButtonStyle = styled.button`
  ${(props) => props.$isButtonActive ? 'background-color: #bc5481' : ''}
`;

export default Button;
