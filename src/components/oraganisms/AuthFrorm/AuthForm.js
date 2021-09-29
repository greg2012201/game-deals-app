import Title from 'components/atoms/Title/Title';
import FormField from 'components/molecules/FormField/FormField';
import React from 'react';
import { StyledButton, StyledForm, ErrorMessage } from './AuthForm.style';
import { useForm } from 'react-hook-form';
import { useAuthFormStateMachine } from './useAuthFormStateMachine';
import { useAuth } from 'hooks/useAuth';
const AuthForm = () => {
  const {
    dispatch,
    actionTypes: { submit, success, rejected },
    state: { isLoading, hasError },
  } = useAuthFormStateMachine();
  const {
    login,
    data: { authError },
  } = useAuth();
  const { register, handleSubmit } = useForm();

  const onSubmit = (credentials) => {
    dispatch({ type: submit });

    return login(credentials)
      .then(() => dispatch({ type: success }))
      .catch(() => dispatch({ type: rejected }));
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <Title titleType="h4">Login</Title>
      <FormField register={register} name="email">
        Email:
      </FormField>
      <FormField register={register} name="password" type="password">
        Password:
      </FormField>
      {hasError && !isLoading && <ErrorMessage>{authError.message}</ErrorMessage>}
      <StyledButton role="submit">
        {isLoading ? 'Loading...' : hasError ? 'Retry...' : 'Submit'}
      </StyledButton>
    </StyledForm>
  );
};

export default AuthForm;
