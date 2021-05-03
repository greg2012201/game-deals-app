import styled from 'styled-components'

export const Wrapper = styled.div`
  /*   display: flex; */
  flex-direction: column;
  grid-row: 3/3;
  grid-column: 1/2;
  justify-content: baseline;
  background-color: ${({ theme }) => theme.colors.lightBlack};

  min-height: 100vh;

  h3 {
    display: block;
    font-family: Lato;
    padding-left: 30px;
    font-weight: 900;
    font-size: ${({ theme }) => theme.fontSize.xxl};
    color: ${({ theme }) => theme.colors.white};
    letter-spacing: 3px;
  }
`
