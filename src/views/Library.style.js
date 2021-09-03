import styled from 'styled-components';

export const Wrapper = styled.div`
  flex-direction: column;
  grid-row: 3/3;
  grid-column: 1/2;
  justify-content: baseline;
  background-color: ${({ theme }) => theme.colors.lightBlack};

  min-height: 100vh;

  h1 {
    padding-left: 30px;
  }
`;
