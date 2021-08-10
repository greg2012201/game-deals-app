import styled from 'styled-components'

export const StyledListItem = styled.li`
  display: grid;
  grid-template-rows: 30% 30px 23px 23px auto;
  grid-template-columns: 55% 45%;
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.darkerGrey};
  border-radius: 7px;
  color: ${({ theme }) => theme.colors.white};
  font-family: Lato;

  p,
  a {
    margin: 0;
    padding: 0;
    font-size: ${({ theme }) => theme.fontSize.l};
  }
  p {
    margin-left: 4px;
  }
  a {
    color: ${({ theme }) => theme.colors.white};
    grid-column: 2;
  }

  h2 {
    grid-column: 1/3;
    grid-row: 1/3;
  }
`
export const StyledAddButton = styled.button`
  box-sizing: border-box;
  grid-column: 2;
  grid-row: span 3/5;
  align-self: center;
  justify-self: end;
  padding: 0;
  margin: 0;
  height: 40px;
  width: 110px;
  border: none;
  background-color: ${({ theme }) => theme.colors.darkerGreen};
  border-radius: 7px;
  font-size: ${({ theme }) => theme.fontSize.xs};
  font-family: Krub;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.lightBlack};
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
