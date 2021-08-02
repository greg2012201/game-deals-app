import { usePanelVisibilityToggle } from 'hooks/usePanelVisibilityToggle'
import { Wrapper } from './Panel.style'
import React from 'react'
const Panel = ({ children, receivedRefs }) => {
  const wrapperRef = React.useRef()
  const visibility = usePanelVisibilityToggle(wrapperRef, receivedRefs)
  return (
    <Wrapper ref={wrapperRef} isVisible={visibility}>
      {children}
    </Wrapper>
  )
}

export default Panel
