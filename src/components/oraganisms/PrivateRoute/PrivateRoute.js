import { useAuth } from 'hooks/useAuth';
import React from 'react';
import { Route, Redirect } from 'react-router';
import { pathsList } from 'routes';

const { loginPage } = pathsList;
const PrivateRoute = ({ children }) => {
  const {
    data: { isLoaded, isEmpty },
  } = useAuth();
  return <Route>{isEmpty && isLoaded ? <Redirect to={loginPage} /> : children}</Route>;
};

export default PrivateRoute;
