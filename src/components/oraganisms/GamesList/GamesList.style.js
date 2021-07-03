import Loader from 'react-loader-spinner'
import styled from 'styled-components'

export const StyledList = styled.ul`
  position: relative;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 300px));

  grid-row-gap: 10px;
  grid-column-gap: 10px;
  padding: 15px 10px;
  justify-content: center;
  overflow: hidden;
  min-height: 350px;
`
export const StyledLoader = styled(Loader)`
  display: flex;
  justify-content: center;
`
export const StyledEndMessage = styled.p`
  margin-top: 0;
  margin-bottom: 50px;
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSize.xxl};
  letter-spacing: 1px;
  line-height: 2em;
  font-family: Lato;
`
export const StyledListWrapper = styled.div`
  margin-top: 20px;

  h2 {
    margin-left: 20px;
    @media (min-width: 980px) {
      margin-left: 10%;
    }
  }
`
