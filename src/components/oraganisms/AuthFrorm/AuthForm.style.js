import { Input } from 'components/atoms/Input/Input';
import { StyledH4 } from 'components/atoms/Title/Title.style';
import { Wrapper as FormFieldWrapper } from 'components/molecules/FormField/FormField.style';
import styled from 'styled-components';

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px 40px;
  box-sizing: border-box;
  width: 320px;
  min-height: 430px;
  background-color: ${({ theme }) => theme.colors.darkerGrey};
  box-shadow: rgba(248, 175, 175, 0.24) 0px 3px 8px;
  border-radius: 15px;

  ${StyledH4} {
    margin-bottom: 20px;
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
  margin: 35px 0;
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
export const ErrorMessage = styled.div`
  margin: 20px 0;
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.white};
  font-family: Lato;
  background-color: #fff2f2;
  font-size: ${({ theme }) => theme.fontSize.s};
  color: ${({ theme }) => theme.colors.red};
  box-shadow: rgba(9, 30, 66, 0.25) 0px 1px 1px, rgba(9, 30, 66, 0.13) 0px 0px 1px 1px;
  border-radius: 12px;
`;
