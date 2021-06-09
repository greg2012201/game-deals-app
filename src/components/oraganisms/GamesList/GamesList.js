import React, { useEffect } from 'react'
import ProductCard from 'components/molecules/GamesListItem/GamesListItem'
import { StyledEndMessage, StyledList, StyledLoader } from './GamesList.style'
import { useParams } from 'react-router'
import { useFetchData } from 'hooks/useFetchData'
import { RAWGOptions } from 'utils/fetchingOptions'
import InfiniteScroll from 'react-infinite-scroll-component'
import { useTheme } from 'styled-components'
import ErrorMessage from 'components/molecules/ErrorMessage/ErrorMessage'
import SkeletonLoader from 'components/atoms/SkeletonLoader/SkeletonLoader'

const { url, key } = RAWGOptions
const GamesList = () => {
  const theme = useTheme()
  const {
    fetchedData: { data, nextPage, limit, error, loading },
    resetData,
    fetchData,
    getCancelToken,
  } = useFetchData()
  const { page, slug } = useParams()
  useEffect(() => {
    const cancelToken = getCancelToken()
    if (page === 'Home') {
      fetchData(`${url}/games?key=${key}`, cancelToken)
    } else if (page === 'genres') fetchData(`${url}/games?genres=${slug}&key=${key}`, cancelToken)
    return () => {
      resetData(cancelToken)
    }
  }, [page, fetchData, slug, resetData, getCancelToken])

  const handleFetchMoreData = () => {
    if (!nextPage) return

    fetchData(nextPage)
  }

  return (
    <InfiniteScroll
      dataLength={data.length}
      next={handleFetchMoreData}
      hasMore={data.length <= limit && nextPage !== null}
      endMessage={<StyledEndMessage style={{ textAlign: 'center' }}>Yay! You have seen it all</StyledEndMessage>}
      loader={!error && data.length > 0 ? <StyledLoader type="ThreeDots" color={`${theme.colors.white}`} /> : null}
    >
      <StyledList>
        {loading ? (
          error && data.length === 0 ? (
            <ErrorMessage>{error}</ErrorMessage>
          ) : (
            Array(20)
              .fill('')
              .map((e, i) => <SkeletonLoader key={i} />)
          )
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
