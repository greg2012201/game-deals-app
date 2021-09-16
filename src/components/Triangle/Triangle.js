import { theme } from 'assets/styles/theme';
import styled from 'styled-components';
const triangleColors = { default: theme.colors.white, active: theme.colors.violet };
const triangleSizes = {
  s: `border-left: 6px solid transparent;
border-right: 6px solid transparent;
border-top: 7px solid 
`,
  m: `border-left: 7px solid transparent;
border-right: 7px solid transparent;
border-top: 8px solid `,
};
const setTriangleShape = (size = 'm') => {
  switch (size) {
    case 's': {
      return triangleSizes.s;
    }

    default: {
      return triangleSizes.m;
    }
  }
};
const setDirection = (direction = null) => {
  if (!direction) return;
  if (direction === 'left') {
    return `transform: rotate(90deg);`;
  } else {
    return `transform: rotate(-90deg);`;
  }
};
export const Triangle = styled.div.attrs({
  role: 'image',
  'aria-label': 'triangle ico',
})`
  &::after {
    display: block;
    content: '';
    width: 0;
    height: 0;
    ${({ size }) => setTriangleShape(size)};
    transform: ${({ toggle }) => (toggle ? 'rotate(180deg)' : 'rotate(0)')};
    ${({ direction }) => setDirection(direction)}
    border-top-color:${({ toggle }) => (toggle ? triangleColors.active : triangleColors.default)};
    transition: 0.2s;
  }
`;
