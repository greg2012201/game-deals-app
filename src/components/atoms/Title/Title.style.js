import styled from 'styled-components'

export const MainTitle = styled.h1`
  display: block;
  font-family: Lato;
  font-weight: 900;
  font-size: ${({ theme }) => theme.fontSize.xxl};
  color: ${({ theme }) => theme.colors.white};
  letter-spacing: 3px;
`
export const SubTitle = styled.h2`
  display: block;
  font-family: Lato;
  font-weight: 600;
  font-size: ${({ theme }) => theme.fontSize.xxl};
  color: ${({ theme }) => theme.colors.white};
`
