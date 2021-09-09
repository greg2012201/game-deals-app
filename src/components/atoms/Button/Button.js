import styled from 'styled-components';

export const Button = styled.button`
  display: ${({ isVisible }) => (isVisible ? 'block' : 'none')};
  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSize.s};
  line-height: 16px;
  height: 32px;
  border-radius: 7px;
  border: none;
  background-color: ${({ theme, isLight }) =>
    isLight ? theme.colors.white : theme.colors.lightGrey};
  color: ${({ theme, isLight }) => (isLight ? theme.colors.black : theme.colors.white)};
  @media (min-width: 980px) {
    & {
      cursor: pointer;
      &:hover {
        box-shadow: ${({ theme }) => theme.boxShadows.onButtonHover};
        transition: 0.2s;
      }
    }
  }
`;
