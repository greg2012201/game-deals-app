import styled from 'styled-components'

export const Wrapper = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 330px));
  grid-template-rows: repeat(auto-fill, minmax(150px, 180px));
  justify-content: center;
  grid-gap: 5px;
  margin: 0 auto;
  padding: 0;
  width: 100%;
  list-style: none;
`
