import React from 'react';
import { StyledParagraph } from './ItemsCounter.style';

const ItemsCounter = ({ numberOfItems = 0 }) => {
  return (
    <>
      <StyledParagraph>Items: {numberOfItems}</StyledParagraph>
    </>
  );
};

export default ItemsCounter;
