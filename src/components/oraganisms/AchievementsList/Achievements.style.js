import styled from 'styled-components'

export const StyledAchivementsList = styled.ul`
  margin-top: 20px;
  padding: 0;
  max-width: 340px;
  grid-gap: 20px;
  display: grid;
  grid-template-columns: repeat(50%);
  grid-template-rows: 30px 170px 150px;
  min-height: 400px;

  @media (min-width: 980px) {
    & {
      min-height: 600px;
    }
  }
  h2 {
    grid-column: 1/3;
    grid-row: 1;
  }
  .pagination {
    grid-column: 1/3;
    grid-row: 4;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
    min-width: 320px;
    list-style: none;
    color: ${({ theme }) => theme.colors.lighterGrey};
    font-size: ${({ theme }) => theme.fontSize.s};
    font-family: Lato;

    @media (min-width: 980px) {
      & {
        font-size: ${({ theme }) => theme.fontSize.m};
      }
    }
  }
  .rc-pagination-prev,
  .rc-pagination-next {
    font-weight: bold;
    color: ${({ theme }) => theme.colors.violet};
    font-size: ${({ theme }) => theme.fontSize.xl};
    transition: 0.3s;
    cursor: pointer;
  }
  .rc-pagination-disabled {
    color: ${({ theme }) => theme.colors.grey};
  }
  .rc-pagination-item {
    transition: 0.3s;
  }
  .rc-pagination-item-active {
    background-color: ${({ theme }) => theme.colors.transparentViolet};
    border-radius: 50%;

    color: ${({ theme }) => theme.colors.white};
  }
  .rc-pagination-jump-next,
  .rc-pagination-jump-prev,
  .rc-pagination-item {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 25px;
    height: 25px;
    cursor: pointer;
  }
`
