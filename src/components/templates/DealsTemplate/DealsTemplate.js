import styled from 'styled-components';

export const DealsTemplate = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin: 0 auto;
  max-width: 1200px;
  min-width: 320px;
  @media (min-width: 580px) {
    min-width: 560px;
  }
  @media (min-width: ${({ theme }) => theme.resolutions.xl}) {
    min-width: 880px;
  }
`;
