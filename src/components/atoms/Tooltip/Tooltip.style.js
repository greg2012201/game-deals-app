import { theme } from 'assets/styles/theme';
import styled from 'styled-components';
import { Paragraph } from '../Paragraph/Paragraph';
const tooltipBackgroundColor = theme.colors.semiTransparentBlack;
export const Arrow = styled.div`
  height: 1rem;
  position: absolute;
  width: 1rem;
  pointer-events: none;

  &::before {
    border-style: solid;
    content: '';
    display: block;
    height: 0;
    margin: auto;
    width: 0;
  }

  &::after {
    border-style: solid;
    content: '';
    display: block;
    height: 0;
    margin: auto;
    position: absolute;
    width: 0;
  }
`;

export const StyledParagraph = styled(Paragraph)`
  margin: 0;
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: 300;
`;
export const Wrapper = styled.div`
  padding: 10px;
  box-sizing: border-box;
  background-color: ${tooltipBackgroundColor};
  border-radius: 3px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.18);
  color: #000;
  display: flex;
  flex-direction: column;
  padding: 0.4rem;
  transition: opacity 0.3s;
  z-index: 9999;

  &[data-popper-placement*='bottom'] ${Arrow}::before {
    border-color: transparent transparent ${tooltipBackgroundColor} transparent;
    border-width: 0 0.5rem 0.4rem 0.5rem;
    position: absolute;
    top: 0;
  }

  &[data-popper-placement*='bottom'] ${Arrow}::after {
    border-color: transparent;
    border-width: 0 0.5rem 0.4rem 0.5rem;
  }
  &[data-popper-placement*='top'] ${Arrow}::before {
    border-color: ${tooltipBackgroundColor} transparent transparent transparent;
    border-width: 0.4rem 0.5rem 0 0.5rem;
    position: absolute;
    top: 1px;
  }

  &[data-popper-placement*='top'] ${Arrow}::after {
    border-color: ${tooltipBackgroundColor} transparent transparent transparent;
    border-width: 0.4rem 0.5rem 0 0.5rem;
  }
  &[data-popper-placement*='right'] ${Arrow}::before {
    border-color: transparent ${tooltipBackgroundColor} transparent transparent;
    border-width: 0.5rem 0.4rem 0.5rem 0;
  }

  &[data-popper-placement*='right'] ${Arrow}::after {
    border-color: transparent ${tooltipBackgroundColor} transparent transparent;
    border-width: 0.5rem 0.4rem 0.5rem 0;
    left: 6px;
    top: 0;
  }
  &[data-popper-placement*='left'] ${Arrow}::before {
    border-color: transparent transparent transparent ${tooltipBackgroundColor};
    border-width: 0.5rem 0 0.5rem 0.4em;
  }

  &[data-popper-placement*='left'] ${Arrow}::after {
    border-color: transparent transparent transparent ${tooltipBackgroundColor};
    border-width: 0.5rem 0 0.5rem 0.4em;
    left: 3px;
    top: 0;
  }

  &[data-popper-placement*='bottom'] ${Arrow} {
    left: 0;
    margin-top: -0.4rem;
    top: 0;
  }
  &[data-popper-placement*='top'] ${Arrow} {
    bottom: 0;
    left: 0;
    margin-bottom: -1rem;
  }
  &[data-popper-placement*='right'] ${Arrow} {
    left: 0;
    margin-left: -0.7rem;
  }
  &[data-popper-placement*='left'] ${Arrow}w {
    margin-right: -0.7rem;
    right: 0;
  }
  &[data-popper-interactive='false'] {
    pointer-events: none;
  }
`;
