import styled from 'styled-components';

export const StyledListItem = styled.li`
  display: grid;
  grid-template-rows: 30% 30px 23px 23px 23px auto;
  grid-template-columns: 65% 35%;
  padding: 15px;
  background-color: ${({ theme }) => theme.colors.darkerGrey};
  border-radius: 7px;
  color: ${({ theme }) => theme.colors.white};
  font-family: Lato;
  min-height: 170px;

  a {
    margin: 0;
    padding: 0;
    font-size: ${({ theme }) => theme.fontSize.m};
    color: ${({ theme }) => theme.colors.lighterGrey};
  }

  a {
    grid-column: 1;
    grid-row: 6;
  }

  h3 {
    grid-column: 1/3;
    grid-row: 1/3;
  }

  @media (min-width: ${({ theme }) => theme.resolutions.s}) {
    & {
      display: flex;
      flex-wrap: wrap;
      min-height: 80px;
      align-items: flex-end;
      justify-content: space-between;
    }
    h3 {
      width: 100%;
      font-size: ${({ theme }) => theme.fontSize.x};
    }

    a {
      grid-row: 2;
    }
  }
`;

export const StyledDiscount = styled.span`
  color: ${({ theme }) => theme.colors.red};
  ${({ value, theme }) => {
    if (value >= 80) {
      return `border-color : ${theme.colors.green}; color:${theme.colors.green};`;
    } else if (value >= 50) {
      return `border-color : ${theme.colors.orange}; color:${theme.colors.orange};`;
    }
  }};
`;
export const StyledP = styled.p`
  margin: 0;
  padding: 0;
  font-size: ${({ theme }) => theme.fontSize.m};
  color: ${({ theme, isExpired }) => (isExpired ? theme.colors.white : theme.colors.lighterGrey)};

  grid-column: 1;

  @media (min-width: ${({ theme }) => theme.resolutions.s}) {
    & {
      grid-row: 2;
    }
  }
`;
