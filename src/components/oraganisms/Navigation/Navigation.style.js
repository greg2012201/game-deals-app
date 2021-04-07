import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  grid-column: 1/2;
  grid-row: 1/2;
  background-color: ${({ theme }) => theme.colors.lowTransparentBlack};
`
