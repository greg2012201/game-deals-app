import Title from 'components/atoms/Title/Title';
import FormField from 'components/molecules/FormField/FormField';
import React from 'react';
import { StyledButton, StyledForm } from './AuthForm.style';
const AuthForm = () => {
  return (
    <StyledForm>
      <Title titleType="h4">Login</Title>
      <FormField name="email">Email:</FormField>
      <FormField name="password" type="password">
        Password:
      </FormField>
      <StyledButton role="submit">Submit</StyledButton>
    </StyledForm>
  );
};

export default AuthForm;
