import Title from 'components/atoms/Title/Title';
import TextContainer from 'components/molecules/TextContainer/TextContainer';
import React from 'react';
import { ArticleWrapper } from './ArticleContainer.style';
import { Paragraph } from 'components/atoms/Paragraph/Paragraph';
import { useWindowSize } from 'react-use';

const ArticleContainer = ({ children, title }) => {
  const { width: windowWidth } = useWindowSize();

  return (
    <ArticleWrapper>
      <Title titleType="h2">{title}</Title>
      {windowWidth < 980 ? <TextContainer key={title}>{children}</TextContainer> : <Paragraph>{children}</Paragraph>}
    </ArticleWrapper>
  );
};

export default ArticleContainer;
