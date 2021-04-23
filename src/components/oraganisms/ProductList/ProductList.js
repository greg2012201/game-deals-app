import React, { useContext, useEffect } from 'react'
import ProductCard from '../../molecules/ProductCard/ProductCard'
import { StyledList } from './ProductList.style'
import { GamesContext } from '../../../providers/GamesDataProvider'
import { useParams } from 'react-router'
const ProductList = () => {
  const { id } = useParams()
  const {
    data: { gamesData, loading, error },
    fetchPopularGames,
    fetchGenres,
  } = useContext(GamesContext)

  useEffect(() => {
    console.log(id)
    if (id === 'home') {
      fetchPopularGames()
    } else {
      fetchGenres(id)
    }
  }, [id])

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
