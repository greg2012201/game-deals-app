import React from 'react'
import Navigation from '../../oraganisms/Navigation/Navigation'
import { Wrapper } from './MainTemplate.style'
import ProductList from '../../oraganisms/ProductList/ProductList'
import GamesDataProvider from '../../../providers/GamesDataProvider'

export const MainTemplate = () => {
  return (
    <Wrapper>
      <Navigation />
      <ProductList />
    </Wrapper>
  )
}
export default MainTemplate
