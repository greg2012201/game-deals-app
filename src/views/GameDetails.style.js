import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  grid-row: 3;
  grid-column: 1/2;
  background-color: ${({ theme }) => theme.colors.lightBlack};
  /* overflow: hidden; */
`
export const ScreenshotsWrapper = styled.div`
  display: flex;
  overflow-x: scroll;
  justify-content: space-between;
  &::-webkit-scrollbar {
    display: none;
  }
  img {
    margin-right: 10px;
    width: 264px;
    height: 168px;
    border-radius: 10px;
  }
`
export const ImageItem = styled.div`
  width: 200px;
`
