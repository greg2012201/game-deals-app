import React, { useEffect, useState } from 'react'
import ProductCard from 'components/molecules/GamesListItem/GamesListItem'
import { StyledList } from './GamesList.style'
import { useParams } from 'react-router'
import { useGamesList } from 'hooks/useGamesList'
import { RAWGOptions } from 'utils/fetchingOptions'
import InfiniteScroll from 'react-infinite-scroll-component'

const { url, key } = RAWGOptions
const GamesList = () => {
  const [count, setCount] = useState(2)

  const {
    gamesData: { data, error, loading },
    fetchData,
    fetchMoreData,
  } = useGamesList()
  const { page, slug } = useParams()
  useEffect(() => {
    if (page === 'Home') {
      fetchData(`${url}/games?key=${key}`)
    } else if (page === 'genres') return fetchData(`${url}/games?genres=${slug}&key=${key}`)
  }, [page, fetchData, slug])

  const handleFetchMoreData = () => {
    setCount(count + 1)

    if (slug) {
      return fetchMoreData(`${url}/games?genres=${slug}&page=${count}&page_size=20&key=${key}`)
    } else return fetchMoreData(`${url}/games?page=${count}&key=${key}`)
  }
  return (
    <InfiniteScroll dataLength={data.length} next={handleFetchMoreData} hasMore={true} loader={!error ? <h4>Loading...</h4> : null}>
      <StyledList>
        {loading ? (
          <p>{error && data.length === 0 ? error : null}</p>
        ) : (
          data.map((data) => {
            return <ProductCard key={data.id} gamesData={data} />
          })
        )}
      </StyledList>
    </InfiniteScroll>
  )
}

export default GamesList
