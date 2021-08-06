import { ButtonsWrapper, PaginationButton } from './HorizontalMenu.style'
import { usePaginationButtons } from 'hooks/usePaginationButtons'
import React, { useRef } from 'react'
import { ReactComponent as Icon } from 'assets/icons/triangle-icon.svg'
import { horizontalMenuScroll } from 'helpers/horizontalMenuScroll'

const scrollDistance = 200

const HorizontalMenu = ({ children }) => {
  const buttonsWrapper = useRef(null)
  const handleOnClick = (direction) => {
    horizontalMenuScroll(direction, buttonsWrapper, scrollDistance)
  }
  const isPagination = usePaginationButtons(buttonsWrapper)
  return (
    <>
      {isPagination && (
        <>
          <PaginationButton left="true" className="left" onClick={() => handleOnClick()}>
            <Icon left="true" />
          </PaginationButton>
          <PaginationButton right="true" className="right" onClick={() => handleOnClick('right')}>
            <Icon right="true" />
          </PaginationButton>
        </>
      )}

      <ButtonsWrapper data-testid="buttons-wrapper" ref={buttonsWrapper}>
        {children}
      </ButtonsWrapper>
    </>
  )
}

export default HorizontalMenu
