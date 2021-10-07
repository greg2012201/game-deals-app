import React from 'react';
import MainTemplate from 'components/templates/MainTemplate/MainTemplate';
import Library from './Library';
import { Switch, Route, Redirect } from 'react-router-dom';
import GameDetails from './GameDetails';
import { GameDetailsProvider } from 'hooks/useGameDetails';
import { pathsList } from 'routes';
import Deals from './Deals';
import ErrorPage from 'views/ErrorPage';
import LoginPage from './LoginPage';
const { library, games, deals, errorPage, loginPage } = pathsList;
const Root = () => {
  return (
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
        <Route path={`${loginPage}`}>
          <LoginPage path={`${loginPage}`} />
        </Route>
      </Switch>
    </MainTemplate>
  );
};
export default Root;
