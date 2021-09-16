import { ButtonsWrapper, PaginationButton } from './HorizontalMenu.style';
import { usePaginationButtons } from 'hooks/usePaginationButtons';
import React, { useRef } from 'react';
import { horizontalMenuScroll } from 'helpers/horizontalMenuScroll';
import { Triangle } from 'components/Triangle/Triangle';

const scrollDistance = 200;

const HorizontalMenu = ({ children }) => {
  const buttonsWrapper = useRef(null);
  const handleOnClick = (direction) => {
    horizontalMenuScroll(direction, buttonsWrapper, scrollDistance);
  };
  const isPagination = usePaginationButtons(buttonsWrapper);
  return (
    <>
      {isPagination && (
        <>
          <PaginationButton left="true" className="left" onClick={() => handleOnClick()}>
            <Triangle direction="left" size="s" />
          </PaginationButton>
          <PaginationButton right="true" className="right" onClick={() => handleOnClick('right')}>
            <Triangle direction="right" size="s" />
          </PaginationButton>
        </>
      )}

      <ButtonsWrapper data-testid="buttons-wrapper" ref={buttonsWrapper}>
        {children}
      </ButtonsWrapper>
    </>
  );
};

export default HorizontalMenu;
