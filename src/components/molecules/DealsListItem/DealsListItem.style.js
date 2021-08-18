import styled from 'styled-components'

export const StyledListItem = styled.li`
  display: grid;
  grid-template-rows: 30% 30px 23px 23px 23px auto;
  grid-template-columns: 65% 35%;
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.darkerGrey};
  border-radius: 7px;
  color: ${({ theme }) => theme.colors.white};
  font-family: Lato;
  min-height: 170px;
  p,
  a {
    margin: 0;
    padding: 0;
    font-size: ${({ theme }) => theme.fontSize.m};
    color: ${({ theme }) => theme.colors.lighterGrey};
  }
  p {
    margin-left: 4px;
    grid-column: 1;
  }
  a {
    grid-column: 1;
    grid-row: 6;
  }

  h3 {
    grid-column: 1/3;
    grid-row: 1/3;
  }

  @media (min-width: 660px) {
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
    p,
    a {
      grid-row: 2;
    }
  }
`
export const StyledAddButton = styled.button`
  box-sizing: border-box;
  grid-column: 2;
  grid-row: 5;
  justify-self: end;
  padding: 0;
  margin: 0;
  height: 40px;
  width: 105px;
  border: none;
  border-radius: 7px;
  font-size: ${({ theme }) => theme.fontSize.xs};
  font-family: Krub;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.darkerGreen};
  cursor: pointer;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }
`
export const StyledDiscount = styled.span`
  color: ${({ theme }) => theme.colors.red};
  ${({ value, theme }) => {
    if (value >= 80) {
      return `border-color : ${theme.colors.green}; color:${theme.colors.green};`
    } else if (value >= 50) {
      return `border-color : ${theme.colors.orange}; color:${theme.colors.orange};`
    }
  }};
`
