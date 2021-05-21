import React, { useRef } from 'react'
import { ReactComponent as ReturnArrow } from 'assets/icons/return-button.svg'
import { Wrapper } from './ReturnButton.style'
import { useReturnButtonVisibility } from 'hooks/useReturnButtonVisibility'
import { customSmoothScrollTo } from 'helpers/customSmoothScrollTo'

const ReturnButton = ({ props }) => {
  const button = useRef(null)
  const isVisible = useReturnButtonVisibility()

  return (
    <Wrapper onClick={() => customSmoothScrollTo('to', 0, 0)} isVisible={isVisible} ref={button} {...props}>
      <ReturnArrow />
    </Wrapper>
  )
}

export default ReturnButton
