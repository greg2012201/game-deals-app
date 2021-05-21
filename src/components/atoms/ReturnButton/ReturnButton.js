import React, { useRef } from 'react'
import { ReactComponent as ReturnArrow } from 'assets/icons/return-button.svg'
import { Wrapper } from './ReturnButton.style'
import { useReturnButtonVisibility } from 'hooks/useReturnButtonVisibility'

const ReturnButton = ({ props }) => {
  const button = useRef(null)
  const isVisible = useReturnButtonVisibility()
  return (
    <Wrapper isVisible={isVisible} ref={button} {...props}>
      <ReturnArrow />
    </Wrapper>
  )
}

export default ReturnButton
