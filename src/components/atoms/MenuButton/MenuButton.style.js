import styled from 'styled-components'
import { ReactComponent as TriangleIcon } from './../../../assets/icons/triangle-icon.svg'
export const Wrapper = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 160px;
  border: none;
  background-color: ${({ theme }) => theme.colors.semiTransparentBlack};
  h1 {
    font-family: 'Krub';
    font-size: ${({ theme }) => theme.fontSize.m};
    color: ${({ theme }) => theme.colors.white};
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
