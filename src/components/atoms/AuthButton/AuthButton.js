import React from 'react';
import { pathsList } from 'routes';
import { StyledButton, Wrapper } from './AuthButton.style';
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
  return (
    <Wrapper>
      {isLoaded && !isEmpty ? (
        <StyledButton onClick={handleOnClick}>Logout</StyledButton>
      ) : (
        <StyledButton>
          <Link to={loginPage}>Login</Link>
        </StyledButton>
      )}
    </Wrapper>
  );
};

export default AuthButton;
