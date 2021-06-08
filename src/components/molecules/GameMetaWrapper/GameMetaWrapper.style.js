import styled from 'styled-components'
export const MetaContentWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 400px;
  background-color: ${({ theme }) => theme.colors.lightBlack};
  .hasLink {
    align-self: flex-start;
    justify-self: flex-end;
    width: 100%;
  }
  a {
    display: block;
    margin: 0;
    padding: 0;
  }
  color: ${({ theme }) => theme.colors.white};
`
