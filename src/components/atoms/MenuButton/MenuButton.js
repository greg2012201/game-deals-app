import React, { useState } from 'react'
import { ReactComponent as TriangleIcon } from './../../../assets/icons/triangle-icon.svg'
import { Wrapper } from './MenuButton.style'

export const MenuButton = () => {
  const [toggle, setToggle] = useState(false)

  const handleOnClick = () => {
    setToggle((state) => !state)
  }
  return (
    <Wrapper toggle={toggle} onClick={handleOnClick}>
      <h1>Games-Discounts</h1>

      <TriangleIcon />
    </Wrapper>
  )
}
export default MenuButton
