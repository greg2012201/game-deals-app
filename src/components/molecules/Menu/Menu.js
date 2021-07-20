import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import { useMenuVisibilityToggle } from 'hooks/useMenuVisibilityToggle'
import MenuButton from 'components/atoms/MenuButton/MenuButton'
import { DropdownPanel, PathsList, PathItem, NavLink } from './Menu.style'
import { Wrapper } from './Menu.style'
import useDropdownMenu from 'react-accessible-dropdown-menu-hook'
import { menuPaths } from 'utils/menuPaths'

export const Menu = ({ receivedRefs }) => {
  const wrapperRef = useRef(null)
  const visibility = useMenuVisibilityToggle(wrapperRef, receivedRefs)
  const { buttonProps, itemProps, isOpen, setIsOpen } = useDropdownMenu(menuPaths.length)

  return (
    <Wrapper ref={wrapperRef} isVisible={visibility}>
      <MenuButton accesibleProps={buttonProps} role="button" toggle={isOpen} onClick={setIsOpen} />

      <DropdownPanel role="menu" isOpen={isOpen}>
        <PathsList>
          {menuPaths.map(({ name, path }, i) => (
            <PathItem key={name}>
              <NavLink {...itemProps[i]} to={path} onClick={() => setIsOpen(false)}>
                {name}
              </NavLink>
            </PathItem>
          ))}
        </PathsList>
      </DropdownPanel>
    </Wrapper>
  )
}
Menu.propTypes = {
  receivedRefs: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
}
export default Menu
