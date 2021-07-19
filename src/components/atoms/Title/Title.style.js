import styled from 'styled-components'

export const StyledH1 = styled.h1`
  display: block;
  font-family: Lato;
  font-weight: 900;
  color: ${({ theme }) => theme.colors.white};
  letter-spacing: 3px;
`
export const StyledH2 = styled.h2`
  margin: 0;
  display: block;
  font-family: Lato;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.white};
`
export const StyledH3 = styled.h3`
  margin: 0;
  display: block;
  font-family: Lato;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.white};
`
export const StyledH4 = styled.h4`
  margin: 0;
  display: block;
  font-family: Lato;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.lighterGrey};
`
