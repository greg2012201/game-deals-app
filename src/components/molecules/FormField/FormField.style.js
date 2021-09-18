import { Input } from 'components/atoms/Input/Input';
import styled from 'styled-components';

export const StyledLabel = styled.label`
  font-size: ${({ theme }) => theme.fontSize.l};
  font-family: Lato;
  font-weight: ${({ hasFocus }) => (hasFocus ? '400' : '300')};
  color: ${({ theme, hasFocus }) => (hasFocus ? theme.colors.violet : theme.colors.white)};
  transition: color 0.2s;
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 80px;
  ${Input}:focus {
    box-shadow: ${({ theme }) => `${theme.colors.violet} 0px 0px 0px 3px;`};
    outline: none;
    transition: 0.2s;
  }
`;
