import ErrorMessage from 'components/atoms/ErrorMessage/ErrorMessage'
import React from 'react'
import { Circle, LinkButton, Wrapper } from './ErrorPage.style'

const ErrorPage = ({ children }) => {
  return (
    <Wrapper>
      <Circle>
        <p>404</p>
      </Circle>
      <ErrorMessage>{children}</ErrorMessage>
      <LinkButton to={'/Home'}>back to Home</LinkButton>
    </Wrapper>
  )
}

export default ErrorPage
