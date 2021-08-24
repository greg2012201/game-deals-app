import styled from 'styled-components'
export const Wrapper = styled.div`
  display: flex;
  position: relative;
  grid-row: 2/3;
  grid-column: 1/2;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.black};
`
