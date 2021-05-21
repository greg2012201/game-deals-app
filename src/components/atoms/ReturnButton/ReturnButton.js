import React, { useRef } from 'react'
import { ReactComponent as ReturnArrow } from 'assets/icons/return-button.svg'
import { Wrapper } from './ReturnButton.style'
import { useReturnButtonVisibility } from 'hooks/useReturnButtonVisibility'

const ReturnButton = ({ props }) => {
  const button = useRef(null)
  const isVisible = useReturnButtonVisibility()

  return (
    <Wrapper
      onClick={() =>
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth',
        })
      }
      isVisible={isVisible}
      ref={button}
      {...props}
    >
      <ReturnArrow />
    </Wrapper>
  )
}

export default ReturnButton
