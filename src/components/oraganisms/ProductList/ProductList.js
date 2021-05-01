import React, { useContext, useEffect } from 'react'
import ProductCard from 'components/molecules/ProductCard/ProductCard'
import { StyledList } from './ProductList.style'
import { GamesContext } from 'providers/GamesDataProvider'
import { useParams } from 'react-router'
import { useGamesList } from 'hooks/useGamesList'
const ProductList = () => {
  const {
    gamesData: { data, error, loading },
    fetchGamesByGenre,
    fetchPopularGames,
  } = useGamesList()
  const { page } = useParams()
  const {
    data: { genresData },
  } = useContext(GamesContext)
  useEffect(() => {
    if (page === 'Home') {
      fetchPopularGames()
    }
  }, [page, fetchPopularGames])

  useEffect(() => {
    const genre = genresData.data.find(({ id, name }) => (name.toLowerCase() === page.toLowerCase() ? id : null))

    return genre ? fetchGamesByGenre(genre.id) : null
  }, [page, genresData.data, fetchGamesByGenre])

  return (
    <StyledList>
      {loading ? (
        <p>{error && data.length === 0 ? error : 'loading...'}</p>
      ) : (
        data.map((data) => {
          return <ProductCard key={data.id} gamesData={data} />
        })
      )}
    </StyledList>
  )
}

export default ProductList
