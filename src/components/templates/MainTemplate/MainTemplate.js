import React from 'react'
import Navigation from '../../oraganisms/Navigation/Navigation'
import { Wrapper } from './MainTemplate.style'
import ProductList from '../../oraganisms/ProductList/ProductList'
import GamesDataProvider from '../../../providers/GamesDataProvider'
import Dashboard from '../../../views/Dashboard'

export const MainTemplate = ({ children }) => {
  return (
    <Wrapper>
      <Navigation />
      {children}
    </Wrapper>
  )
}
export default MainTemplate
