import React, { useContext, useEffect } from 'react'
import ProductCard from '../../molecules/ProductCard/ProductCard'
import { StyledList } from './ProductList.style'
import { GamesContext } from '../../../providers/GamesDataProvider'
import { useParams } from 'react-router'
const ProductList = () => {
  const { page } = useParams()
  const {
    data: { gamesData, loading, error },
    genres,
    fetchPopularGames,
    fetchGamesByGenre,
  } = useContext(GamesContext)

  useEffect(() => {
    if (page === 'Home') {
      fetchPopularGames()
    } else {
      const genre = genres.find(({ id, name }) => (name.toLowerCase() === page.toLowerCase() ? id : null))
      fetchGamesByGenre(genre ? genre.id : null)
    }
  }, [page, genres])

  return (
    <StyledList>
      {loading ? (
        <p>{error && gamesData.length === 0 ? error : 'loading...'}</p>
      ) : (
        gamesData.map((gamesData) => {
          return <ProductCard key={gamesData.id} gamesData={gamesData} />
        })
      )}
    </StyledList>
  )
}

export default ProductList
