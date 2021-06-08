import { StyledH3 } from 'components/atoms/Title/Title.style'
import styled from 'styled-components'

export const ItemWrapper = styled.div`
  p,
  a {
    margin: 0;
    font-family: Lato;
    font-size: ${({ theme }) => theme.fontSize.s};
    color: ${({ theme }) => theme.colors.white};
    line-height: 1.8em;
  }
  & {
    margin-bottom: 12px;
  }
  width: 50%;

  ${StyledH3} {
    margin-bottom: 10px;
    font-size: ${({ theme }) => theme.fontSize.m};
    color: ${({ theme }) => theme.colors.lighterGrey};
  }
`
