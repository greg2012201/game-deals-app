import AuthForm from 'components/oraganisms/AuthFrorm/AuthForm';
import { Wrapper } from './LoginPage.style';
import React, { useEffect } from 'react';
import { useHistory } from 'react-router';
import { pathsList } from 'routes';
import { useSelector } from 'react-redux';

const { deals, wishList } = pathsList;
const LoginPage = () => {
  const history = useHistory();
  const auth = useSelector((state) => state.firebase.auth);
  useEffect(() => {
    if (auth.isLoaded && !auth.isEmpty) {
      history.push(`${deals}${wishList}`);
    }
  }, [history, auth.isLoaded, auth.isEmpty]);

  return (
    <Wrapper>
      <AuthForm />
    </Wrapper>
  );
};

export default LoginPage;
