import React from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from 'assets/styles/GlobalStyle'
import { theme } from 'assets/styles/theme'
import MainTemplate from 'components/templates/MainTemplate/MainTemplate'
import Dashboard from './Dashboard'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import GameDetails from './GameDetails'
import { GenresDataProvider } from 'hooks/useGenres'
import { GameDetailsProvider } from 'hooks/useGameDetails'
import { pathsList } from 'routes'
const { library, games } = pathsList
const Root = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <GenresDataProvider>
          <MainTemplate>
            <Switch>
              <Route exact path="/">
                <Redirect to={library} />
              </Route>
              <Route exact path={`${library}${games}/:slug?`}>
                <GameDetailsProvider>
                  <GameDetails />
                </GameDetailsProvider>
              </Route>
              <Route path={`${library}/:page?/:slug?`}>
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
