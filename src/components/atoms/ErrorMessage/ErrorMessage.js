import React from 'react'
import { Paragraph } from 'components/atoms/Paragraph/Paragraph'

const ErrorMessage = ({ children }) => {
  return (
    <div>
      <Paragraph>{children}</Paragraph>
    </div>
  )
}

export default ErrorMessage
