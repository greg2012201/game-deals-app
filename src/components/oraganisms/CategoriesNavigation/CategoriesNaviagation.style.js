import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  overflow: hidden;
  position: relative;
  grid-row: 2/3;
  grid-column: 1/2;
  background-color: ${({ theme }) => theme.colors.black};
`
export const PaginationButton = styled.button`
  height: 32px;
  width: 26px;
  background-color: ${({ theme }) => theme.colors.transparentGrey};
`
export const ButtonsWrapper = styled.div`
  display: flex;

  /*  transform: translateX(${({ move }) => `${move}px`}); */
  transition: 0.3s;
  width: 100%;
  background-color: yellow;
  overflow-x: scroll;
  scroll-behavior: smooth;
`
