import React, { useContext, useEffect, useState } from 'react'
import { mockProductList } from '../../../data/mockProductList'
import ProductCard from '../../molecules/ProductCard/ProductCard'
import { StyledList } from './ProductList.style'
import axios from 'axios'
import { GamesContext } from '../../../providers/GamesDataProvider'
import { useGamesList } from '../../../hooks/useGamesList'
import { clearConfigCache } from 'prettier'

const ProductList = () => {
  const {
    data: { gamesData },
    fetchPopularGames,
  } = useContext(GamesContext)

  useEffect(() => {
    fetchPopularGames()
  }, [GamesContext])

  return (
    <StyledList>
      {gamesData.map((gamesData) => {
        return <ProductCard key={gamesData.id} gamesData={gamesData} />
      })}
    </StyledList>
  )
}

export default ProductList
