import Loader from 'react-loader-spinner'
import styled from 'styled-components'

export const StyledList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 300px));

  grid-row-gap: 10px;
  grid-column-gap: 10px;
  padding: 15px 10px;
  justify-content: center;
  overflow: hidden;
`
export const StyledLoader = styled(Loader)`
  display: flex;
  justify-content: center;
`
