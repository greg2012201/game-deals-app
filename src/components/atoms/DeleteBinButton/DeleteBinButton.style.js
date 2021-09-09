import styled, { keyframes } from 'styled-components';

export const animationsDuration = {
  swingingAnimation: 800,
  delay: 200,
  disappearanceAnimation: 1700,
};

const swingAnimation = keyframes`
25% { transform:rotate(25deg)}
50% { transform:rotate(-25deg)}
100% { transform:rotate(0deg)}
`;

const disappearanceAnimation = keyframes`
from { opacity: 1}
to { opacity: 0}
`;

export const StyledButton = styled.button`
  align-self: flex-end;
  box-sizing: border-box;
  margin: 0 0 20px 0;
  padding: 0;
  width: 45px;
  height: 45px;
  border: none;
  background-color: ${({ theme }) => theme.colors.grey};
  border-radius: 7px;
  cursor: pointer;
  animation: ${swingAnimation} ${animationsDuration.swingingAnimation}ms 2,
    ${disappearanceAnimation} ${animationsDuration.delay}ms
      ${animationsDuration.disappearanceAnimation}ms 1 forwards;
  animation-play-state: ${({ hasAnimationStarted }) =>
    hasAnimationStarted ? 'running' : 'paused'};
  transform-origin: top;

  &:hover {
    box-shadow: ${({ theme }) => theme.boxShadows.onButtonHover};
  }
`;
