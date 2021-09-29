import AuthForm from 'components/oraganisms/AuthFrorm/AuthForm';
import { Wrapper } from './LoginPage.style';
import React, { useEffect } from 'react';
import { useHistory } from 'react-router';
import { pathsList } from 'routes';
import { useAuth } from 'hooks/useAuth';

const { deals, wishList } = pathsList;
const LoginPage = () => {
  const history = useHistory();
  const {
    data: { isEmpty, isLoaded },
  } = useAuth();
  useEffect(() => {
    if (isEmpty && isLoaded) return;
    if (isLoaded && !isEmpty) {
      history.push(`${deals}${wishList}`);
    }
  }, [history, isEmpty, isLoaded]);

  return (
    <Wrapper>
      <AuthForm />
    </Wrapper>
  );
};

export default LoginPage;
