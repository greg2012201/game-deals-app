import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  grid-row: 3;
  grid-column: 1/2;
  background-color: ${({ theme }) => theme.colors.lightBlack};
  min-height: 100vh;
  h3 {
    @media (min-width: 980px) {
      & {
        font-size: ${({ theme }) => theme.fontSize.xxxl};
      }
    }
  }
`
