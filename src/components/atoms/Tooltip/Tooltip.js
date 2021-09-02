import React from 'react';

import { useWindowSize } from 'react-use';
import { Wrapper, StyledParagraph, Arrow } from './Tooltip.style';
const Tooltip = ({ children, popperProps: { getArrowProps, getTooltipProps, setTooltipRef, visible } }) => {
  const { width } = useWindowSize();
  return visible && width >= 980 ? (
    <Wrapper ref={setTooltipRef} {...getTooltipProps()}>
      <Arrow {...getArrowProps()} />
      <StyledParagraph>{children}</StyledParagraph>
    </Wrapper>
  ) : null;
};

export default Tooltip;
