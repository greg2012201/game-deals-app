import Title from 'components/atoms/Title/Title'
import TextContainer from 'components/molecules/TextContainer/TextContainer'
import React from 'react'
import { ArticleWrapper } from './ArticleTemplate.style'
import { Paragraph } from 'components/atoms/Paragraph/Paragraph'
import { useWindowSize } from 'react-use'

const ArticleTemplate = ({ children, title }) => {
  const { width: windowWidth } = useWindowSize()
  return (
    <ArticleWrapper>
      <Title titleType="h2">{title}</Title>
      {windowWidth < 980 ? <TextContainer>{children}</TextContainer> : <Paragraph>{children}</Paragraph>}
    </ArticleWrapper>
  )
}

export default ArticleTemplate
