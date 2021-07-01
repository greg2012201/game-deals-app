import React, { useEffect } from 'react'
import ProductCard from 'components/molecules/GamesListItem/GamesListItem'
import { StyledEndMessage, StyledList, StyledLoader } from './GamesList.style'
import InfiniteScroll from 'react-infinite-scroll-component'
import { useTheme } from 'styled-components'
import ErrorMessage from 'components/molecules/ErrorMessage/ErrorMessage'
import GamesListSkeletonLoader from 'components/atoms/GamesListSkeletonLoader/GamesListSkeletonLoader'
import { useGamesList } from 'hooks/useGamesList'
import { RAWGOptions } from 'utils/fetchingOptions'
const { url, key } = RAWGOptions
const GamesList = ({ endMessage = 'Yay! You have seen it all', fecthingRoute }) => {
  const theme = useTheme()

  const {
    fetchedData: { data, loading, error, nextPage, limit },
    resetData,
    fetchData,
    getCancelToken,
  } = useGamesList()

  useEffect(() => {
    const cancelToken = getCancelToken()

    fetchData(`${url}${fecthingRoute}key=${key}`, cancelToken)
    return () => {
      resetData(cancelToken)
    }
  }, [fetchData, fecthingRoute, resetData, getCancelToken])
  const handleFetchMoreData = () => {
    if (!nextPage) return
    return fetchData(nextPage)
  }
  return (
    <InfiniteScroll
      scrollThreshold={'200px'}
      dataLength={data.length}
      next={handleFetchMoreData}
      hasMore={data.length <= limit && nextPage !== null}
      endMessage={endMessage ? <StyledEndMessage style={{ textAlign: 'center' }}>{endMessage}</StyledEndMessage> : null}
      loader={!error && data.length > 0 ? <StyledLoader type="ThreeDots" color={`${theme.colors.white}`} /> : null}
    >
      <StyledList>
        {loading ? (
          error && data.length === 0 ? (
            <ErrorMessage>{error}</ErrorMessage>
          ) : (
            Array(20)
              .fill('')
              .map((e, i) => <GamesListSkeletonLoader key={i} />)
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
