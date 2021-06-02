import React, { useRef } from 'react'
import { useTextContainer } from './useTextContainer'
import { ContentWrapper, ViewWrapper, ReadMoreButton, StyledP } from './TextContainer.style'

function TextContainer({ children }) {
  const view = useRef(null)
  const paragraph = useRef(null)

  const { isOpen, isButtonVisible, setOpen } = useTextContainer(view, paragraph)
  return (
    <ContentWrapper>
      <ViewWrapper ref={view} isOpen={isOpen}>
        <StyledP ref={paragraph}>{children}</StyledP>
      </ViewWrapper>
      <ReadMoreButton isVisible={isButtonVisible} onClick={() => setOpen((toggle) => !toggle)}>
        {isOpen ? 'Show less' : 'Read more'}
      </ReadMoreButton>
    </ContentWrapper>
  )
}

export default TextContainer
