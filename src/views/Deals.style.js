import styled from 'styled-components'

export const Wrapper = styled.div`
  display: grid;

  grid-row: 3;
  grid-column: 1;
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.lightBlack};
  min-height: 100vh;
`
