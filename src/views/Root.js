import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { theme } from 'assets/styles/theme';
import MainTemplate from 'components/templates/MainTemplate/MainTemplate';
import Library from './Library';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import GameDetails from './GameDetails';
import { GenresDataProvider } from 'hooks/useGenres';
import { GameDetailsProvider } from 'hooks/useGameDetails';
import { pathsList } from 'routes';
import { store } from 'store';
import { Provider } from 'react-redux';
import Deals from './Deals';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import { rrfProps } from 'features/firebase/firebase';
import ErrorPage from 'views/ErrorPage';
const { library, games, deals, errorPage } = pathsList;
const Root = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Provider store={store}>
          <ReactReduxFirebaseProvider {...rrfProps}>
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
                    <Library />
                  </Route>
                  <Route path={`${deals}`}>
                    <Deals />
                  </Route>
                  <Route path={`${errorPage}`}>
                    <ErrorPage />
                  </Route>
                </Switch>
              </MainTemplate>
            </GenresDataProvider>
          </ReactReduxFirebaseProvider>
        </Provider>
      </ThemeProvider>
    </Router>
  );
};
export default Root;
