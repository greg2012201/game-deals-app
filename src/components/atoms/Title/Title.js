import React from 'react'
import { StyledH1, StyledH2, StyledH3, StyledH4 } from './Title.style'
const titleTypes = { h1: 'h1', h2: 'h2', h3: 'h3', h4: 'h4' }
function Title({ children, titleType }) {
  switch (titleType) {
    case titleTypes.h1:
      return <StyledH1>{children}</StyledH1>
    case titleTypes.h2:
      return <StyledH2>{children} </StyledH2>
    case titleTypes.h3:
      return <StyledH3>{children}</StyledH3>
    case titleTypes.h4:
      return <StyledH4>{children}</StyledH4>
    default:
      return <StyledH1>{children}</StyledH1>
  }
}

export default Title
