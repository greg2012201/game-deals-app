import React from 'react';
import { pathsList } from 'routes';
import { StyledLink } from './AuthLink.style';
const { loginPage } = pathsList;
const AuthLink = () => {
  return <StyledLink to={`${loginPage}`}>Login</StyledLink>;
};

export default AuthLink;
