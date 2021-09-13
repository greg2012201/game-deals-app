import styled from 'styled-components';

export const StyledInformationsTemplate = styled.div`
  position: relative;
  grid-column: 1/3;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 20px;
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.lightBlack};
  width: 100%;
  min-height: 600px;
  h1 {
    margin: 0 0 20px 0;
    width: 100%;
  }

  .loader {
    margin: 0 auto;
  }
  @media (min-width: ${({ theme }) => theme.resolutions.l}) {
    & {
      display: grid;
      grid-template-columns: 50% 50%;
      justify-items: center;
      .loader {
        grid-row: 1;
        grid-column: 1/3;
      }
    }
  }
`;
