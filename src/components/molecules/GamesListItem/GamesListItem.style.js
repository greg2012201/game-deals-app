import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const StyledProductCard = styled.li`
  margin: 20px 0 50px;
  padding: 20px;
  display: grid;
  max-width: 300px;
  grid-template-columns: 50% 50%;
  grid-template-rows: 2;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 14px;
  background-color: ${({ theme }) => theme.colors.transparentGrey};

  font-family: Lato;
  font-style: normal;
  p {
    margin: 0;
    color: ${({ theme }) => theme.colors.white};
  }

  h2 {
    font-weight: bold;
  }

  img {
    grid-column: 1/3;
    width: 100%;
    max-height: 200px;
  }
`
export const GameLink = styled(Link)`
  margin: 15px 0;
  line-height: 1.6em;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.white};
  grid-row: 3;
  grid-column: 1/3;
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: bold;

  &:hover {
    color: ${({ theme }) => theme.colors.darkWhite};
  }
`
export const GenresWrapper = styled.ul`
  padding: 0;
  grid-row: 4;
  grid-column: 1/3;
  display: flex;
  justify-content: space-between;
  color: ${({ theme }) => theme.colors.white};

  li {
    list-style: none;
    padding-left: 40px;
  }
`
export const GenresLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.white};
  text-align: right;
  &:hover {
    color: ${({ theme }) => theme.colors.darkWhite};
  }
`
export const Rating = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px 0 -15px;
  grid-row: 2;
  grid-column: 2;
  width: 25px;
  height: 25px;
  justify-self: end;
  border: 1px solid ${({ theme }) => theme.colors.red};
  color: ${({ theme }) => theme.colors.red};
  border-radius: 5px;
  cursor: default;
  ${({ value, theme }) => {
    if (value >= 80) {
      return `border-color : ${theme.colors.green}; color:${theme.colors.green};`
    } else if (value >= 50) {
      return `border-color : ${theme.colors.orange}; color:${theme.colors.orange};`
    }
  }}
`
