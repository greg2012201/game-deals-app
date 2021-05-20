import React from 'react'
import { Circle, LinkButton, Message, Wrapper } from './ErrorMessage.style'

const ErrorMessage = ({ children }) => {
  return (
    <Wrapper>
      <Circle>
        <p>404</p>
      </Circle>
      <Message>{children}</Message>
      <LinkButton to={'/Home'}>back to Home</LinkButton>
    </Wrapper>
  )
}

export default ErrorMessage
