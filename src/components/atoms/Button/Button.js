import styled from 'styled-components'

export const Button = styled.button`
  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSize.s};
  line-height: 16px;
  height: 32px;
  border-radius: 7px;
  border: none;
  background-color: ${({ theme, isLight }) => (isLight ? theme.colors.white : theme.colors.lightGrey)};
  color: ${({ theme, isLight }) => (isLight ? theme.colors.black : theme.colors.white)};
`
