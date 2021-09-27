import React from 'react';
import { pathsList } from 'routes';
import { StyledButton } from './AuthButton.style';
import { Link } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';
const { loginPage } = pathsList;
const AuthButton = () => {
  const {
    logout,
    data: { isLoaded, isEmpty },
  } = useAuth();

  const handleOnClick = () => {
    return logout();
  };
  return isLoaded && !isEmpty ? (
    <StyledButton onClick={handleOnClick}>Logout</StyledButton>
  ) : (
    <Link to={loginPage}>
      <StyledButton>Login</StyledButton>
    </Link>
  );
};

export default AuthButton;
