import React from 'react'
import { Wrapper } from './BottomPanel.style'

const BottomPanel = React.forwardRef((props, ref) => {
  return (
    <Wrapper ref={ref} {...props}>
      {props.children}
    </Wrapper>
  )
})

export default BottomPanel
