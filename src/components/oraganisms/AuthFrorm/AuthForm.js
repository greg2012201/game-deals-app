import Title from 'components/atoms/Title/Title';
import FormField from 'components/molecules/FormField/FormField';
import React, { useState } from 'react';
import { useFirebaseConnect, useFirebase } from 'react-redux-firebase';
import { StyledButton, StyledForm } from './AuthForm.style';
import { useForm } from 'react-hook-form';

const AuthForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const { register, handleSubmit } = useForm();
  useFirebaseConnect();
  const firebase = useFirebase();
  const onSubmit = (credentials) => {
    setIsLoading(true);
    return firebase
      .login(credentials)
      .then(() => setIsLoading(false))
      .catch((error) => {
        setIsLoading(false);
        setIsError(true);
      });
  };

  return (
    <>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <Title titleType="h4">Login</Title>
        <FormField register={register} name="email">
          Email:
        </FormField>
        <FormField register={register} name="password" type="password">
          Password:
        </FormField>
        <StyledButton role="submit">
          {isLoading ? 'Loading' : isError ? 'Retry...' : 'Submit'}
        </StyledButton>
        {isError && !isLoading && <p>it will be an error popup here</p>}
      </StyledForm>
      )
    </>
  );
};

export default AuthForm;
