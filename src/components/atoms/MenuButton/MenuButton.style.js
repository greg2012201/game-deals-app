import styled from 'styled-components'
export const Wrapper = styled.button`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 150px;
  border: none;
  background-color: ${({ theme, toggle }) => (toggle ? theme.colors.white : theme.colors.semiTransparentBlack)};
  transition: 0.2s;
  cursor: pointer;

  h1 {
    font-family: 'Krub';
    font-size: ${({ theme }) => theme.fontSize.l};
    color: ${({ theme, toggle }) => (toggle ? theme.colors.black : theme.colors.white)};
    font-weight: bold;
  }
  svg {
    transform: ${({ toggle }) => (toggle ? 'rotate(180deg)' : 'rotate(0)')};
    & > #background {
      fill: ${({ toggle, theme: { colors } }) => (toggle ? colors.violet : colors.white)};
    }
    transition: transform 0.3s;
  }
`
