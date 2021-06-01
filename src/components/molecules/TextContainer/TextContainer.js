import React, { useRef } from 'react'
import { useTextContainer } from './useTextContainer'
import { ContentWrapper, ReadMoreButton, StyledP } from './TextContainer.style'
const viewHeight = 200
function TextContainer({ children }) {
  const paragraph = useRef(null)
  const { isOpen, isButtonVisible, setOpen } = useTextContainer(viewHeight, paragraph)
  return (
    <ContentWrapper>
      <StyledP viewHeight={viewHeight} ref={paragraph} isOpen={isOpen}>
        {children}
      </StyledP>

      <ReadMoreButton isVisible={isButtonVisible} onClick={() => setOpen((state) => !state)}>
        {isOpen ? 'Show less' : 'Read more'}
      </ReadMoreButton>
    </ContentWrapper>
  )
}

export default TextContainer
