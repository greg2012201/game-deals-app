import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  grid-row: 3;
  grid-column: 1;
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.lightBlack};
  min-height: 100vh;
`

export const StyledLinkButton = styled(Link)`
  align-self: flex-end;

  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  margin: 0 2.5px 10px;
  padding: 0 5px;
  font-family: Lato;
  font-style: normal;
  font-weight: 800;
  font-size: ${({ theme }) => theme.fontSize.s};
  line-height: 16px;
  height: 32px;
  border-radius: 7px;
  border: none;
  background-color: ${({ theme }) => theme.colors.lightGrey};
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
  text-decoration: none;
  transition: 0.2s;

  &::after {
    display: block;
    content: '\\2192';
    font-size: 20px;
    align-self: center;
    line-height: 100%;
    margin-bottom: 4px;
    margin-left: 5px;
  }
`
