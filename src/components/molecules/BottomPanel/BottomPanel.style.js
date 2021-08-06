import styled from 'styled-components'
export const Wrapper = styled.div`
  display: flex;

  /*  overflow: hidden; */
  position: relative;
  grid-row: 2/3;
  grid-column: 1/2;

  background-color: ${({ theme }) => theme.colors.black};
`
