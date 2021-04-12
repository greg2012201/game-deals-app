import styled from 'styled-components'

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  bottom: calc(100vh - 56px);
  display: flex;
  grid-column: 1/2;
  grid-row: 1/2;
  background-color: ${({ theme }) => theme.colors.grey};
`
