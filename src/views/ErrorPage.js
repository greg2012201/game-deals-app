import ErrorMessage from 'components/atoms/ErrorMessage/ErrorMessage';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { pathsList } from 'routes';
import { Circle, LinkButton, Wrapper } from './ErrorPage.style';
const { library } = pathsList;
const ErrorPage = () => {
  const { isError, errorMessage } = useSelector((state) => state.errors);
  const history = useHistory(library);
  useEffect(() => {
    if (isError) return;
    history.goBack();
  }, [history, isError]);
  return (
    <Wrapper>
      <Circle>
        <p>404</p>
      </Circle>
      <ErrorMessage>
        {errorMessage ? errorMessage : `Something went wrong we couldn't load your content.`}
      </ErrorMessage>
      <LinkButton to={'/'}>back to Home</LinkButton>
    </Wrapper>
  );
};

export default ErrorPage;
