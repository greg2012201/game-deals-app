import Title from 'components/atoms/Title/Title';
import FormField from 'components/molecules/FormField/FormField';
import React from 'react';
import { useFirebaseConnect, useFirebase } from 'react-redux-firebase';
import { StyledButton, StyledForm } from './AuthForm.style';
import { useForm } from 'react-hook-form';
import { useAuthFormStateMachine } from './useAuthFormStateMachine';
import { useSelector } from 'react-redux';
const AuthForm = () => {
  const {
    dispatch,
    actionTypes: { submit, success, rejected },
    state: { isLoading, hasError },
  } = useAuthFormStateMachine();
  const authError = useSelector((state) => state.firebase.authError);
  const { register, handleSubmit } = useForm();
  useFirebaseConnect();
  const firebase = useFirebase();
  const onSubmit = (credentials) => {
    dispatch({ type: submit });

    return firebase
      .login(credentials)
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
      <StyledButton role="submit">
        {isLoading ? 'Loading' : hasError ? 'Retry...' : 'Submit'}
      </StyledButton>
      {hasError && !isLoading && <p>{authError.message}</p>}
    </StyledForm>
  );
};

export default AuthForm;
