import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import { useMenuVisibilityToggle } from 'hooks/UseMenuVisibility'
import MenuButton from 'components/atoms/MenuButton/MenuButton'
import { DropdownPanel } from './Menu.style'
import { Wrapper } from './Menu.style'
import { Link } from 'react-router-dom'
import SearchBar from 'components/atoms/SearchBar/SearchBar'
import useDropdownMenu from 'react-accessible-dropdown-menu-hook'
import { menuPaths } from 'utils/manuPaths'

export const Menu = ({ receivedRefs }) => {
  const wrapperRef = useRef(null)
  const visibility = useMenuVisibilityToggle(wrapperRef, receivedRefs)
  const { itemProps, isOpen, setIsOpen } = useDropdownMenu(menuPaths.length)

  return (
    <Wrapper ref={wrapperRef} isVisible={visibility}>
      <MenuButton role="button" aria-haspopup={true} aria-expanded={isOpen} toggle={isOpen} onClick={setIsOpen} />
      {isOpen ? (
        <DropdownPanel role="menu">
          <ul>
            {menuPaths.map(({ name, path }, i) => (
              <li key={name}>
                <Link role="menuitem" {...itemProps[i]} to={path} onClick={() => setIsOpen(false)}>
                  <h2>{name}</h2>
                </Link>
              </li>
            ))}
          </ul>
          <SearchBar />
        </DropdownPanel>
      ) : null}
    </Wrapper>
  )
}
Menu.propTypes = {
  receivedRefs: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
}
export default Menu
