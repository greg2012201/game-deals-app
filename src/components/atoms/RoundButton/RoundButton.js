import React from 'react'
import { ReactComponent as ReturnArrow } from 'assets/icons/arrow.svg'
import { ReactComponent as ExitCross } from 'assets/icons/cross.svg'
import { Wrapper } from './RoundButton.style'
import { useVisibilityOnScroll } from 'hooks/useVisibilityOnScroll'
const RoundButton = (props) => {
  const isVisible = useVisibilityOnScroll()
  return (
    <Wrapper isVisible={props.isExit ? true : isVisible} {...props}>
      {props.isReturn ? <ReturnArrow /> : null}
      {props.isExit ? <ExitCross /> : null}
    </Wrapper>
  )
}

export default RoundButton
