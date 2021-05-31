import styled from 'styled-components'

export const Title = styled.h3`
  display: block;
  font-family: Lato;
  padding-left: 30px;
  font-weight: 900;
  font-size: ${({ theme }) => theme.fontSize.xxl};
  color: ${({ theme }) => theme.colors.white};
  letter-spacing: 3px;
`
