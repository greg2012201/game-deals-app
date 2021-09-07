import { usePanelVisibilityToggle } from 'hooks/usePanelVisibilityToggle';
import { Wrapper } from './TopPanelstyle';
import React, { useRef } from 'react';
const TopPanel = ({ children, receivedRefs }) => {
  const wrapperRef = useRef();
  const visibility = usePanelVisibilityToggle(wrapperRef, receivedRefs);
  return (
    <Wrapper ref={wrapperRef} isVisible={visibility}>
      {children}
    </Wrapper>
  );
};

export default TopPanel;
