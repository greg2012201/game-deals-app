import { Input } from 'components/atoms/Input/Input';
import { StyledH4 } from 'components/atoms/Title/Title.style';
import { Wrapper as FormFieldWrapper } from 'components/molecules/FormField/FormField.style';
import styled from 'styled-components';

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 10px 40px;
  box-sizing: border-box;
  width: 320px;
  height: 430px;
  background-color: ${({ theme }) => theme.colors.darkerGrey};
  box-shadow: rgba(248, 175, 175, 0.24) 0px 3px 8px;
  border-radius: 15px;

  ${StyledH4} {
    margin: 0 auto 50px auto;
    font-size: ${({ theme }) => theme.fontSize.xxl};
    color: ${({ theme }) => theme.colors.white};
    font-weight: 800;
    text-align: center;
  }
  ${FormFieldWrapper} {
    ${Input} {
      width: 100%;
    }
    margin-top: 20px;
  }
`;

export const StyledButton = styled.button`
  align-self: end;
  margin: 50px 0;
  width: 97px;
  height: 45px;
  background-color: ${({ theme }) => theme.colors.transparentViolet};
  font-family: Lato;
  color: ${({ theme }) => theme.colors.white};
  border: none;
  border-radius: 7px;
  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSize.l};
  cursor: pointer;

  &:hover {
    box-shadow: ${({ theme }) => theme.boxShadows.onButtonHover};
  }
`;
