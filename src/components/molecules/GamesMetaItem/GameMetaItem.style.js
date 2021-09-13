import styled from 'styled-components';

export const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  p,
  a {
    margin: 0;
    font-family: Lato;
    font-size: ${({ theme }) => theme.fontSize.s};
    color: ${({ theme }) => theme.colors.white};
    line-height: 1.8em;

    @media (min-width: ${({ theme }) => theme.resolutions.l}) {
      & {
        font-size: ${({ theme }) => theme.fontSize.m};
      }
    }
  }
  & {
    margin-bottom: 12px;
  }
  width: 50%;

  h4 {
    margin-bottom: 10px;
  }
`;
