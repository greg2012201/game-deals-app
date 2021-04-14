import React from 'react'
import { ReactComponent as Icon } from './../../../assets/icons/triangle-icon.svg'
import { Wrapper } from './MenuButton.style'

export const MenuButton = (props) => {
  return (
    <Wrapper {...props}>
      <h1>Game-Deals</h1>

      <Icon />
    </Wrapper>
  )
}
export default MenuButton
