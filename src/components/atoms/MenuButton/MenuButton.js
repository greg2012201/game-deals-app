import React from 'react'
import PropTypes from 'prop-types'
import { ReactComponent as Icon } from 'assets/icons/triangle-icon.svg'
import { Wrapper } from './MenuButton.style'

export const MenuButton = (props) => {
  return (
    <Wrapper {...props}>
      <h1>Game-Deals</h1>

      <Icon />
    </Wrapper>
  )
}

MenuButton.propTypes = {
  toggle: PropTypes.bool.isRequired,
  onClick: PropTypes.func,
}

export default MenuButton
