import Title from 'components/atoms/Title/Title'
import TextContainer from 'components/molecules/TextContainer/TextContainer'
import React from 'react'
import { ArticleWrapper } from './ArticleTemplate.style'

const ArticleTemplate = ({ textContent, title }) => {
  return (
    <ArticleWrapper>
      <Title titleType="h2">{title}</Title>
      <TextContainer>{textContent}</TextContainer>
    </ArticleWrapper>
  )
}

export default ArticleTemplate
