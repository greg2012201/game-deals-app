import styled from 'styled-components'
import { Wrapper as GalleryWrapper } from 'components/molecules/Gallery/Gallery.style'
import { StyledListWrapper } from 'components/oraganisms/GamesList/GamesList.style'
export const Background = styled.div`
  grid-row: 3;
  grid-column: 1/2;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.lightBlack};
`
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
  background-image: ${({ hasLoaded, backgroundURL }) => (hasLoaded ? `url(${backgroundURL})` : 'none')};

  ${StyledListWrapper} {
    grid-column: 1/3;
  }

  h1 {
    @media (min-width: 980px) {
      & {
        font-size: ${({ theme }) => theme.fontSize.xxxl};
      }
    }
  }
`

export const Mask = styled.div`
  display: flex;
  flex-direction: column;

  box-sizing: border-box;
  min-height: 100vh;

  width: 100%;
  background-color: ${({ theme, isLoading }) => (isLoading ? theme.colors.black : theme.colors.lowTransparentBlack)};

  @media (min-width: 980px) {
    & {
      display: grid;
      grid-template-columns: 50% 50%;
    }
  }
  h1 {
    grid-row: 1;
    grid-column: 1/3;
    margin: 20px;
  }
  ${GalleryWrapper} {
    margin-right: 0;
    margin-left: 0;
    padding-left: 20px;
  }
`
