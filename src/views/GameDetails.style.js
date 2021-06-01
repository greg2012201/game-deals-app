import styled from 'styled-components'

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  grid-row: 3;
  grid-column: 1/2;
  background-color: ${({ theme }) => theme.colors.lightBlack};
  min-height: 100vh;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  z-index: 10;
  h1 {
    @media (min-width: 980px) {
      & {
        font-size: ${({ theme }) => theme.fontSize.xxxl};
      }
    }
  }
`

export const Mask = styled.div`
  min-height: 100vh;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.lowTransparentBlack};
  z-index: 2;
`
