import styled from 'styled-components'
import { Wrapper as GalleryWrapper } from 'components/molecules/Gallery/Gallery.style'

export const Wrapper = styled.div`
  box-sizing: border-box;
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

  h1 {
    @media (min-width: 980px) {
      & {
        font-size: ${({ theme }) => theme.fontSize.xxxl};
      }
    }
  }
`

export const Mask = styled.div`
  box-sizing: border-box;
  min-height: 100vh;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.lowTransparentBlack};

  div,
  h1,
  h2 {
    margin: 20px;
  }
  ${GalleryWrapper} {
    margin-right: 0;
    margin-left: 0;
    padding-left: 20px;
  }
`
