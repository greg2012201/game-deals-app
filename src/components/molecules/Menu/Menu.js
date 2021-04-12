import React from 'react'
import MenuButton from '../../atoms/MenuButton/MenuButton'
import { Wrapper } from './Menu.style'

export const Menu = ({ receivedRefs }) => {
  console.log(receivedRefs)
  return (
    <Wrapper>
      <MenuButton />
    </Wrapper>
  )
}
export default Menu
