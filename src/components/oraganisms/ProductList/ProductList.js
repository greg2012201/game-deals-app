import React, { useContext, useEffect, useState } from 'react'
import { mockProductList } from '../../../data/mockProductList'
import ProductCard from '../../molecules/ProductCard/ProductCard'
import { StyledList } from './ProductList.style'
import axios from 'axios'
import { GamesContext } from '../../../providers/GamesDataProvider'
import { useGamesList } from '../../../hooks/useGamesList'

const ProductList = () => {
  /*  const { gamesData } = useContext(GamesContext) */

  const gamesData = useGamesList()

  return (
    <StyledList>
      {gamesData.map((gamesData) => (
        <ProductCard key={gamesData.id} productsData={gamesData} />
      ))}
    </StyledList>
  )
}

export default ProductList
