import React, { useContext, useEffect, useState } from 'react'
import { mockProductList } from '../../../data/mockProductList'
import ProductCard from '../../molecules/ProductCard/ProductCard'
import { StyledList } from './ProductList.style'
import axios from 'axios'
import { GamesContext } from '../../../providers/GamesDataProvider'

const ProductList = () => {
  const { gamesData } = useContext(GamesContext)

  return (
    <StyledList>
      {gamesData.map((gamesData) => (
        <ProductCard key={gamesData.id} productsData={gamesData} />
      ))}
    </StyledList>
  )
}

export default ProductList
