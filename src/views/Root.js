import React from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from '../assets/styles/GlobalStyle'
import { theme } from '../assets/styles/theme'
import MainTemplate from '../components/templates/MainTemplate/MainTemplate'
import GamesDataProvider from '../providers/GamesDataProvider'

const Root = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <GamesDataProvider>
        <MainTemplate />
      </GamesDataProvider>
    </ThemeProvider>
  )
}
export default Root
