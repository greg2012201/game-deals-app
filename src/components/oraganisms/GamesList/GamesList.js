import React, { useEffect } from 'react'
import ProductCard from 'components/molecules/GamesListItem/GamesListItem'
import { StyledEndMessage, StyledListWrapper, StyledList, StyledLoader } from './GamesList.style'
import InfiniteScroll from 'react-infinite-scroll-component'
import { useTheme } from 'styled-components'
import ErrorMessage from 'components/molecules/ErrorMessage/ErrorMessage'
import GamesListSkeletonLoader from 'components/atoms/GamesListSkeletonLoader/GamesListSkeletonLoader'
import { useGamesList } from 'hooks/useGamesList'
import { RAWGOptions } from 'utils/fetchingOptions'
import Title from 'components/atoms/Title/Title'
const { url, key } = RAWGOptions
const GamesList = ({ endMessage = 'Yay! You have seen it all', title = null, fecthingRoute }) => {
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
    <StyledListWrapper>
      <InfiniteScroll
        scrollThreshold={'200px'}
        dataLength={data.length}
        next={handleFetchMoreData}
        hasMore={data.length <= limit && nextPage !== null}
        endMessage={endMessage ? <StyledEndMessage style={{ textAlign: 'center' }}>{endMessage}</StyledEndMessage> : null}
        loader={!error && data.length > 0 ? <StyledLoader type="ThreeDots" color={`${theme.colors.white}`} /> : null}
      >
        {title ? <Title titleType="h2">{title}</Title> : null}
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
    </StyledListWrapper>
  )
}

export default GamesList
