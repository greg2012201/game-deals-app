import Title from 'components/atoms/Title/Title'
import TextContainer from 'components/molecules/TextContainer/TextContainer'
import React from 'react'
import { ArticleWrapper } from './ArticleContainer.style'
import { Paragraph } from 'components/atoms/Paragraph/Paragraph'
import ArticleContainerSkeletonLoader from './ArticleContainerSkeletonLoader'
import ErrorMessage from 'components/atoms/ErrorMessage/ErrorMessage'
import { useWindowSize } from 'react-use'

const ArticleContainer = ({ children, title, isLoading, data, error }) => {
  const { width: windowWidth } = useWindowSize()
  if (error) {
    return <ErrorMessage>Something went wrong</ErrorMessage>
  }
  if (isLoading || Object.keys(data).length === 0) {
    return <ArticleContainerSkeletonLoader />
  } else {
    return (
      <ArticleWrapper>
        <Title titleType="h2">{title}</Title>
        {windowWidth < 980 ? <TextContainer>{children}</TextContainer> : <Paragraph>{children}</Paragraph>}
      </ArticleWrapper>
    )
  }
}

export default ArticleContainer
