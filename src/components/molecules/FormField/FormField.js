import { Input } from 'components/atoms/Input/Input';
import React, { useState } from 'react';
import { StyledLabel, Wrapper } from './FormField.style';

const FormField = ({ children, name, type = 'text' }) => {
  const [hasFocus, setHasFocus] = useState(false);
  const toggleFocus = () => {
    return setHasFocus((state) => !state);
  };
  return (
    <Wrapper>
      <StyledLabel hasFocus={hasFocus} htmlFor={name}>
        {children}
      </StyledLabel>
      <Input
        type={type}
        name={name}
        id={name}
        required
        onBlur={toggleFocus}
        onFocus={toggleFocus}
        autoComplete="on"
      />
    </Wrapper>
  );
};

export default FormField;
