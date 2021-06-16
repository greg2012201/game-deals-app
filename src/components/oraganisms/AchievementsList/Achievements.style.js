import styled from 'styled-components'

export const StyledAchivementsList = styled.ul`
  margin-top: 20px;
  padding: 0;
  max-width: 340px;
  grid-gap: 20px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 130px));
  grid-template-rows: repeat(auto-fill, minmax(100px, 150px));

  .pagination {
    grid-column: 1/3;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: space-between;
    list-style: none;
  }
  .rc-pagination-item-active {
    background-color: ${({ theme }) => theme.colors.violet};
  }
`
