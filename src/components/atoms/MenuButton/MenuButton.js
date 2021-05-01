import React from 'react'
import PropTypes from 'prop-types'
import { ReactComponent as Icon } from 'assets/icons/triangle-icon.svg'
import { Wrapper } from './MenuButton.style'

export const MenuButton = (props) => {
  return (
    <Wrapper {...props} {...props.accesibleProps}>
      <h1>Game-Deals</h1>

      <Icon />
    </Wrapper>
  )
}

MenuButton.propTypes = {
  toggle: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
  onClick: PropTypes.func,
}

export default MenuButton
