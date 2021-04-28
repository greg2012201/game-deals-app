import React from 'react'
import Navigation from 'components/oraganisms/Navigation/Navigation'
import { Wrapper } from './MainTemplate.style'

export const MainTemplate = ({ children }) => {
  return (
    <Wrapper>
      <Navigation />
      {children}
    </Wrapper>
  )
}
export default MainTemplate
