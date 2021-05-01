import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 56px;
  z-index: ${({ isVisible }) => (isVisible ? '100' : '0')};
  bottom: calc(100vh - 56px);
  display: flex;
  grid-column: 1/2;
  grid-row: 1/2;
  background-color: ${({ theme }) => theme.colors.grey};
  opacity: ${({ isVisible }) => (isVisible ? '1' : '0')};
  transition: 0.3s;
`
export const DropdownPanel = styled.div`
  display: flex;
  visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
  flex-wrap: wrap;
  flex-direction: column;
  padding: 20px 25px;
  position: absolute;
  background-color: ${({ theme }) => theme.colors.lightBlack};
  height: calc(100vh - 56px);
  top: 100%;
  left: 0;
  right: 0;

  transition: 0.2;
`
export const PathsList = styled.ul`
  list-style: none;
  width: 280px;
  padding: 0;
  margin: 0;
`
export const PathItem = styled.li``
export const NavLink = styled(Link)`
  display: block;
  width: 100%;
  height: 100%;
  padding: 0 15px;
  text-decoration: none;
  font-family: Lato;
  font-style: normal;
  font-weight: 800;
  font-size: ${({ theme }) => theme.fontSize.xl};
  line-height: 2.5em;
  color: ${({ theme }) => theme.colors.white};

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.colors.lightGrey};
    outline-color: ${({ theme }) => theme.colors.lightGrey};
    color: ${({ theme }) => theme.colors.violet};
  }
`
