import React, { useRef } from 'react'
import { useMenuVisibilityToggle } from '../../../hooks/UseMenuVisibility'
import MenuButton from '../../atoms/MenuButton/MenuButton'
import { Wrapper } from './Menu.style'

export const Menu = ({ receivedRefs }) => {
  const wrapperRef = useRef(null)
  const visibility = useMenuVisibilityToggle(wrapperRef, receivedRefs)

  return (
    <Wrapper ref={wrapperRef} isVisible={visibility}>
      <MenuButton />
    </Wrapper>
  )
}
export default Menu
