import React, { useRef } from 'react';
import { useTextContainer } from './useTextContainer';
import { ContentWrapper, ViewWrapper } from './TextContainer.style';
import { Button } from 'components/atoms/Button/Button';
import { Paragraph } from 'components/atoms/Paragraph/Paragraph';
const TextContainer = ({ children, viewHeight = 200 }) => {
  const view = useRef(null);
  const paragraph = useRef(null);

  const { isOpen, isButtonVisible, setOpen } = useTextContainer(view, paragraph);
  return (
    <ContentWrapper>
      <ViewWrapper viewHeight={viewHeight} ref={view} isOpen={isOpen}>
        <Paragraph ref={paragraph}>{children}</Paragraph>
      </ViewWrapper>
      <Button isLight isVisible={isButtonVisible} onClick={() => setOpen((toggle) => !toggle)}>
        {isOpen ? 'Show less' : 'Read more'}
      </Button>
    </ContentWrapper>
  );
};

export default TextContainer;
