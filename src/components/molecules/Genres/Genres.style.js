import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
export const Wrapper = styled.div`
  display: flex;

  /*  overflow: hidden; */
  position: relative;
  grid-row: 2/3;
  grid-column: 1/2;

  background-color: ${({ theme }) => theme.colors.black};
`

export const PaginationButton = styled.button`
  position: absolute;
  height: 32px;
  width: 26px;
  top: 50%;
  border: none;
  border-radius: 5px 0 0 5px;
  background-color: ${({ theme }) => theme.colors.transparentGrey};
  /* display: ${({ theme }) => (window.innerWidth > theme.resolutions.x ? 'block' : 'none')}; */
  transform: translateY(-50%);
  ${({ right }) => (right ? ' right:5px; border-radius:  0 5px 5px 0 ;' : ' left:5px; ')};
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.colors.white};
    svg {
      & > #background {
        fill: ${({ theme }) => theme.colors.violet};
      }
    }
  }
  svg {
    transform: ${({ right }) => (right ? ' rotate(-90deg)' : 'rotate(90deg)')};
  }
`
export const ButtonsWrapper = styled.div`
  scrollbar-width: none;
  position: absolute;
  top: 50%;
  left: 45px;
  right: 45px;
  transform: translateY(-50%);

  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: 0.3s;

  @media (min-width: ${({ theme }) => theme.resolutions.x}) {
    width: 94%;
  }

  button {
    margin: 0 2.5px;
    &:nth-of-type(1) {
      margin-left: 0;
    }
    &:nth-last-of-type(1) {
      margin-right: 0px;
    }
  }

  overflow-x: scroll;
`
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
