import React, { useRef } from 'react'
import { ButtonsWrapper, PaginationButton, Wrapper } from './BottomPanel.style'
import { ReactComponent as Icon } from 'assets/icons/triangle-icon.svg'
import { horizontalMenuScroll } from 'helpers/horizontalMenuScroll'
import { usePaginationButtons } from 'hooks/usePaginationButtons'
const scrollDistance = 200
const BottomPanel = React.forwardRef((props, ref) => {
  const buttonsWrapper = useRef(null)

  const handleOnClick = (direction) => {
    horizontalMenuScroll(direction, buttonsWrapper, scrollDistance)
  }
  const isPagination = usePaginationButtons(buttonsWrapper)
  return (
    <Wrapper ref={ref} {...props}>
      {isPagination ? (
        <>
          <PaginationButton left="true" className="left" onClick={() => handleOnClick()}>
            <Icon left="true" />
          </PaginationButton>
          <PaginationButton right="true" className="right" onClick={() => handleOnClick('right')}>
            <Icon right="true" />
          </PaginationButton>
        </>
      ) : null}
      <ButtonsWrapper data-testid="buttons-wrapper" ref={buttonsWrapper}>
        {props.children}
      </ButtonsWrapper>
    </Wrapper>
  )
})

export default BottomPanel
