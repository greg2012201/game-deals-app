import styled from 'styled-components'

export const StyledList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 300px));
  grid-row: 4;
  grid-row-gap: 10px;
  grid-column-gap: 10px;
  padding: 15px 10px;
  justify-content: center;
  overflow: hidden;
`
