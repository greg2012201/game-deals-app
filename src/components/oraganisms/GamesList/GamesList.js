import React, { useEffect } from 'react'
import ProductCard from 'components/molecules/GamesListItem/GamesListItem'
import { StyledList } from './GamesList.style'
import { useParams } from 'react-router'
import { useGamesList } from 'hooks/useGamesList'
import { RAWGOptions } from 'utils/fetchingOptions'
import InfiniteScroll from 'react-infinite-scroll-component'

const { url, key } = RAWGOptions
const GamesList = () => {
  const {
    gamesData: { data, nextPage, error, loading },
    resetData,
    fetchData,
  } = useGamesList()
  const { page, slug } = useParams()
  useEffect(() => {
    resetData()

    if (page === 'Home') {
      fetchData(`${url}/games?key=${key}`)
    } else if (page === 'genres') return fetchData(`${url}/games?genres=${slug}&key=${key}`)
  }, [page, fetchData, slug, resetData])

  const handleFetchMoreData = () => {
    if (!nextPage) return
    fetchData(nextPage)
  }
  return (
    <InfiniteScroll
      dataLength={data.length}
      next={handleFetchMoreData}
      hasMore={nextPage !== null}
      endMessage={
        <p style={{ textAlign: 'center' }}>
          <b>Yay! You have seen it all</b>
        </p>
      }
      loader={!error ? <h4>Loading...</h4> : null}
    >
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
