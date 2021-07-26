import React from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from 'assets/styles/GlobalStyle'
import { theme } from 'assets/styles/theme'
import MainTemplate from 'components/templates/MainTemplate/MainTemplate'
import Dashboard from './Dashboard'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import GameDetails from './GameDetails'
import { GenresDataProvider } from 'hooks/useGenresData'
import { GameDetailsProvider } from 'hooks/useGameDetails'

const Root = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <GenresDataProvider>
          <MainTemplate>
            <Switch>
              <Route exact path="/">
                <Redirect to="/Home" />
              </Route>
              <Route exact path="/games/:slug?">
                <GameDetailsProvider>
                  <GameDetails />
                </GameDetailsProvider>
              </Route>
              <Route path="/:page?/:slug?">
                <Dashboard />
              </Route>
            </Switch>
          </MainTemplate>
        </GenresDataProvider>
      </ThemeProvider>
    </Router>
  )
}
export default Root
