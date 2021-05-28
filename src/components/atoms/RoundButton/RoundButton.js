import React from 'react'
import { ReactComponent as ReturnArrow } from 'assets/icons/arrow.svg'
import { ReactComponent as ExitCross } from 'assets/icons/cross.svg'
import { Wrapper } from './RoundButton.style'

const RoundButton = (props, { isVisible = true }) => {
  return (
    <Wrapper isVisible={isVisible} {...props}>
      {props.isReturn ? <ReturnArrow /> : null}
      {props.isExit ? <ExitCross /> : null}
    </Wrapper>
  )
}

export default RoundButton
