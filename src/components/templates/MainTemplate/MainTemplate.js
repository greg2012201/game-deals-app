import React from 'react'
import CategoriesNavigation from '../../oraganisms/CategoriesNavigation/CategoriesNavigation'
import Navigation from '../../oraganisms/Navigation/Navigation'
import { Wrapper } from './MainTemplate.style'

export const MainTemplate = () => {
  return (
    <Wrapper>
      <Navigation />
      <CategoriesNavigation />
    </Wrapper>
  )
}
export default MainTemplate
