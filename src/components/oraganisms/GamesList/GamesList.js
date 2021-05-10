import React, { useContext, useEffect } from 'react'
import ProductCard from 'components/molecules/GamesListItem/GamesListItem'
import { StyledList } from './GamesList.style'
import { GamesContext } from 'providers/GamesDataProvider'
import { useParams } from 'react-router'
import { useGamesList } from 'hooks/useGamesList'
import { RAWGOptions } from 'utils/fetchingOptions'
const { url, key } = RAWGOptions
const GamesList = () => {
  const {
    gamesData: { data, error, loading },
    fetchData,
  } = useGamesList()
  const { page } = useParams()
  const {
    data: { genresData },
  } = useContext(GamesContext)
  useEffect(() => {
    if (page === 'Home') {
      fetchData(`${url}/games?key=${key}`)
    }
  }, [page, fetchData])

  useEffect(() => {
    const genre = genresData.data.find(({ id, name }) => (name.toLowerCase() === page.toLowerCase() ? id : null))

    return genre ? fetchData(`${url}/games?genres=${genre.id}&page=3&page_size=60&key=${key}`) : null
  }, [page, genresData.data, fetchData])

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

export default GamesList
