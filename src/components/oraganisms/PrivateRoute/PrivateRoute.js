import { useAuth } from 'hooks/useAuth';
import React from 'react';
import { Route, Redirect } from 'react-router';
import { pathsList } from 'routes';

const { loginPage } = pathsList;
const PrivateRoute = ({ children, path }) => {
  const {
    data: { isLoaded, isEmpty },
  } = useAuth();
  return <Route path={path}>{isEmpty && isLoaded ? <Redirect to={loginPage} /> : children}</Route>;
};

export default PrivateRoute;
