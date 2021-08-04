import styled from 'styled-components'
export const Wrapper = styled.div`
  margin: 5px 5px;
  padding: 0;
  position: relative;
`
export const ToggleButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0;
  padding: 0 5px;
  height: 30px;
  min-width: 40px;
  border: none;
  font-family: Lato;
  font-style: normal;
  font-weight: 800;
  font-size: ${({ theme }) => theme.fontSize.s};
  background-color: ${({ theme }) => theme.colors.lightGrey};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 7px;
  svg {
    margin-left: 5px;
    transform: ${({ isOpen }) => (isOpen ? 'rotate(180deg)' : 'rotate(0)')};
    & > #background {
      fill: ${({ isOpen, theme: { colors } }) => (isOpen ? colors.violet : colors.white)};
    }
    transition: 0.2s;
  }
  transition: 0.2s;
  cursor: pointer;
`
export const SelectList = styled.ul`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  position: absolute;
  margin: 0;
  top: 100%;
  right: 0;
  min-width: 60px;
  max-height: 360px;
  background-color: ${({ theme }) => theme.colors.lightGrey};
  border-radius: 7px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;

  border-radius: 7px;
  z-index: 9999;
  list-style: none;
`
export const SelectListItem = styled.li`
  padding: 10px;
  box-sizing: border-box;
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  font-size: ${({ theme }) => theme.fontSize.s};
  font-style: normal;
  font-weight: 800;
  font-family: Lato;
  border-radius: 7px;

  ${({ theme, isHighlited }) => isHighlited && `background-color : ${theme.colors.white}; color:${theme.colors.violet}`};
  transition: 0.2s;
  &:hover {
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.violet};
  }
`
