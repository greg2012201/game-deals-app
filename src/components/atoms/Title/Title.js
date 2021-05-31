import React from 'react'
import { MainTitle, SubTitle } from './Title.style'

function Title({ children, isSubTitle }) {
  return <>{isSubTitle ? <SubTitle>{children}</SubTitle> : <MainTitle>{children}</MainTitle>}</>
}

export default Title
