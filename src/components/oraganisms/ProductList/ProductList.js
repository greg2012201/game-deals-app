import React, { useContext, useEffect } from 'react'
import ProductCard from '../../molecules/ProductCard/ProductCard'
import { StyledList } from './ProductList.style'
import { GamesContext } from '../../../providers/GamesDataProvider'

const ProductList = () => {
  const {
    data: { gamesData, loading, error },
    fetchPopularGames,
  } = useContext(GamesContext)

  useEffect(() => {
    fetchPopularGames()
  }, [])

  return (
    <StyledList>
      {loading ? (
        <p>{error ? error : 'loading...'}</p>
      ) : (
        gamesData.map((gamesData) => {
          return <ProductCard key={gamesData.id} gamesData={gamesData} />
        })
      )}
    </StyledList>
  )
}

export default ProductList
