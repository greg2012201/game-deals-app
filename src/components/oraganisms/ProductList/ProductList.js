import React, { useContext, useEffect } from 'react'
import ProductCard from 'components/molecules/ProductCard/ProductCard'
import { StyledList } from './ProductList.style'
import { GamesContext } from 'providers/GamesDataProvider'
import { useParams } from 'react-router'
const ProductList = () => {
  const { page } = useParams()
  const {
    data: {
      gamesData: { data, loading, error },
    },
    data: { genresData },

    fetchPopularGames,
    fetchGamesByGenre,
  } = useContext(GamesContext)

  useEffect(() => {
    if (page === 'Home') {
      fetchPopularGames()
    } else {
      const genre = genresData.data.find(({ id, name }) => (name.toLowerCase() === page.toLowerCase() ? id : null))

      return genre ? fetchGamesByGenre(genre.id) : null
    }
  }, [page, genresData.data])

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
