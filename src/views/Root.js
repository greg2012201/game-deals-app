import React from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from 'assets/styles/GlobalStyle'
import { theme } from 'assets/styles/theme'
import MainTemplate from 'components/templates/MainTemplate/MainTemplate'
import GamesDataProvider from 'providers/GamesDataProvider'
import Dashboard from './Dashboard'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import Games from './Games'

const Root = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <GamesDataProvider>
          <MainTemplate>
            <Switch>
              <Route exact path="/">
                <Redirect to="/Home" />
              </Route>
              <Route exact path="/games/:slug?">
                <Games />
              </Route>
              <Route path="/:page?/:slug?">
                <Dashboard />
              </Route>
            </Switch>
          </MainTemplate>
        </GamesDataProvider>
      </ThemeProvider>
    </Router>
  )
}
export default Root
