import React, { useEffect, useRef, useState } from 'react'
import { useMenuVisibilityToggle } from '../../../hooks/useMenuVisibility'
import { useToggle } from '../../../hooks/useToggle'
import MenuButton from '../../atoms/MenuButton/MenuButton'
import DropdownPanel from '../DropdownPanel/DropdownPanel'
import { Wrapper } from './Menu.style'

export const Menu = ({ receivedRefs }) => {
  const wrapperRef = useRef(null)
  const dropdownPanelRef = React.useRef()
  const visibility = useMenuVisibilityToggle(wrapperRef, receivedRefs)
  const [toggle, setToggle] = useToggle(false)

  useEffect(() => {
    const handleOnClick = (e) => {
      if (toggle && dropdownPanelRef.current && !dropdownPanelRef.current.contains(e.target)) {
        setToggle()
      }
    }

    document.addEventListener('click', handleOnClick)
    return () => {
      document.removeEventListener('click', handleOnClick)
    }
  }, [toggle])

  return (
    <Wrapper ref={wrapperRef} isVisible={visibility}>
      <MenuButton toggle={toggle} onClick={setToggle} />
      {toggle ? <DropdownPanel ref={dropdownPanelRef} /> : null}
    </Wrapper>
  )
}
export default Menu
