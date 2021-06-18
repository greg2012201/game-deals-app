import styled from 'styled-components'

export const InformationsTemplate = styled.div`
  grid-column: 1/3;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 20px;
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.lightBlack};
  width: 100%;
  @media (min-width: 980px) {
    & {
      display: grid;
      grid-template-columns: 50% 50%;
      justify-items: center;
    }
  }
`
