import React from 'react'
import PropTypes from 'prop-types'
import MenuButton from 'components/atoms/MenuButton/MenuButton'
import { DropdownPanel, PathsList, PathItem, NavLink } from './Menu.style'
import useDropdownMenu from 'react-accessible-dropdown-menu-hook'
import { menuPaths } from 'routes/index'

export const Menu = () => {
  const { buttonProps, itemProps, isOpen, setIsOpen } = useDropdownMenu(menuPaths.length)
  return (
    <>
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
    </>
  )
}
Menu.propTypes = {
  receivedRefs: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
}
export default Menu
