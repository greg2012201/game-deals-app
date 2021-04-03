import React from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from '../assets/styles/GlobalStyle'
import { theme } from '../assets/styles/theme'

const Root = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
    </ThemeProvider>
  )
}
export default Root
