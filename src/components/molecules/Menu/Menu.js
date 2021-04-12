import React, { useRef } from 'react'
import { useMenuVisibilityToggle } from '../../../hooks/UseMenuVisibility'
import { useToggle } from '../../../hooks/useToggle'
import MenuButton from '../../atoms/MenuButton/MenuButton'
import { Wrapper } from './Menu.style'

export const Menu = ({ receivedRefs }) => {
  const wrapperRef = useRef(null)
  const visibility = useMenuVisibilityToggle(wrapperRef, receivedRefs)
  const [toggle, setToggle] = useToggle(false)
  return (
    <Wrapper ref={wrapperRef} isVisible={visibility}>
      <MenuButton toggle={toggle} onClick={setToggle} />
    </Wrapper>
  )
}
export default Menu
