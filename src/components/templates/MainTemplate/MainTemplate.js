import React from 'react'
import PropTypes from 'prop-types'
import Navigation from 'components/oraganisms/Navigation/Navigation'
import { Wrapper } from './MainTemplate.style'

export const MainTemplate = ({ children }) => {
  return (
    <Wrapper>
      <Navigation />
      {children}
    </Wrapper>
  )
}
MainTemplate.propTypes = {
  children: PropTypes.element.isRequired,
}
export default MainTemplate
