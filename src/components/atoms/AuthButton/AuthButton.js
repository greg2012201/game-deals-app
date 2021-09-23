import React from 'react';
import { useSelector } from 'react-redux';
import { useFirebase } from 'react-redux-firebase';
import { pathsList } from 'routes';
import { StyledButton } from './AuthButton.style';
import { Link } from 'react-router-dom';
const { loginPage } = pathsList;
const AuthButton = () => {
  const firebase = useFirebase();
  const auth = useSelector((state) => state.firebase.auth);
  const handleOnClick = () => {
    firebase.logout();
  };
  return auth.isLoaded && !auth.isEmpty ? (
    <StyledButton onClick={handleOnClick}>Logout</StyledButton>
  ) : (
    <Link to={loginPage}>
      <StyledButton>Login</StyledButton>
    </Link>
  );
};

export default AuthButton;
