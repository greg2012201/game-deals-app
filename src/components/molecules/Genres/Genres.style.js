import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const activeClassName = 'active-link'
export const StyledLinkButton = styled(NavLink).attrs({ activeClassName })`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 2.5px;
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

  &.${activeClassName}, &:hover {
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.violet};
  }

  &:nth-of-type(1) {
    margin-left: 0;
  }
  &:nth-last-of-type(1) {
    margin-right: 0px;
  }
`
