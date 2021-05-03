import styled from 'styled-components'

export const StyledProductCard = styled.li`
  margin: 20px 0 50px;
  padding: 20px;
  display: grid;
  max-width: 300px;
  grid-template-columns: 20% 20% 16% 1fr;
  grid-template-rows: 6;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 14px;
  background-color: ${({ theme }) => theme.colors.lighterGrey};

  font-family: Lato;
  font-style: normal;

  p {
    margin: 0;
  }
  h2 {
    font-size: ${({ theme }) => theme.fontSize.xl};
    line-height: 22px;
    grid-row: 2/3;
    grid-column: 1/5;
  }
  .price,
  h2 {
    font-weight: bold;
  }
  .price {
    font-size: ${({ theme }) => theme.fontSize.m};

    grid-column: 1;
    color: ${({ theme }) => theme.colors.violet};
  }
  .before,
  .difference {
    color: ${({ theme }) => theme.colors.lighterGrey};
  }
  .price,
  .before,
  .difference {
    grid-row: 3;
  }
  .description {
    margin: 10px 0;
    align-self: start;
    grid-column: 1/4;
    grid-row: 4;
    font-size: ${({ theme }) => theme.fontSize.s};
  }
  .comment {
    margin-bottom: 15px;
    grid-row: 4;
    grid-column: 4;
    width: 89px;
    height: 40px;
    align-self: end;
    justify-self: end;
    font-weight: normal;
    background-color: ${({ theme }) => theme.colors.transparentViolet};
    font-size: ${({ theme }) => theme.fontSize.s};
    line-height: 12px;
  }
  .link {
    grid-row: 5/6;
    grid-column: 1/5;
    height: 45px;
    background-color: ${({ theme }) => theme.colors.violet};
    a {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: ${({ theme }) => theme.fontSize.m};
      font-weight: bold;
      color: ${({ theme }) => theme.colors.white};
      text-decoration: none;
      width: 100%;
      height: 100%;
    }
  }
  img {
    grid-column: 1/5;
    width: 100%;
  }
`
