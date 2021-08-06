import { usePanelVisibilityToggle } from 'hooks/usePanelVisibilityToggle'
import { Wrapper } from './TopPanelstyle'
import React from 'react'
const TopPanel = ({ children, receivedRefs }) => {
  const wrapperRef = React.useRef()
  const visibility = usePanelVisibilityToggle(wrapperRef, receivedRefs)
  return (
    <Wrapper ref={wrapperRef} isVisible={visibility}>
      {children}
    </Wrapper>
  )
}

export default TopPanel
