import React, { useEffect } from 'react'
import ProductCard from 'components/molecules/GamesListItem/GamesListItem'
import { StyledEndMessage, StyledListWrapper, StyledList, StyledLoader } from './GamesList.style'
import InfiniteScroll from 'react-infinite-scroll-component'
import { useTheme } from 'styled-components'
import ErrorPage from 'components/molecules/ErrorPage/ErrorPage'
import GamesListSkeletonLoader from 'components/atoms/GamesListSkeletonLoader/GamesListSkeletonLoader'
import { useGamesList } from 'hooks/useGamesList'
import { RAWGOptions } from 'utils/fetchingOptions'
import Title from 'components/atoms/Title/Title'
import { useStateMachine } from 'hooks/useStateMachine'
import { states } from 'utils/state/states'
const { url, key } = RAWGOptions
const GamesList = ({ endMessage = 'Yay! You have seen it all', title = null, fecthingRoute }) => {
  const theme = useTheme()
  const { updateState, compareState } = useStateMachine()
  const {
    results: { data, error, nextPage, limit, hasInitialFetch },
    resetData,
    fetchData,
    getCancelToken,
  } = useGamesList()

  useEffect(() => {
    const cancelToken = getCancelToken()

    fetchData({ url: `${url}${fecthingRoute}key=${key}`, source: cancelToken, updateState })
    return () => {
      resetData(cancelToken)
    }
  }, [fetchData, fecthingRoute, resetData, getCancelToken, updateState])
  const handleFetchMoreData = () => {
    if (!nextPage) return
    return fetchData({ url: nextPage, updateState, initial: false })
  }

  return (
    <StyledListWrapper>
      {compareState(states.hasError) && (
        <StyledList>
          <ErrorPage>{error}</ErrorPage>
        </StyledList>
      )}
      {hasInitialFetch && compareState(states.isLoading) ? (
        <StyledList>
          {Array(20)
            .fill('')
            .map((e, i) => (
              <GamesListSkeletonLoader key={i} />
            ))}
        </StyledList>
      ) : (
        <InfiniteScroll
          scrollThreshold={'200px'}
          dataLength={data.length}
          next={handleFetchMoreData}
          hasMore={data.length <= limit && nextPage !== null}
          endMessage={endMessage ? <StyledEndMessage style={{ textAlign: 'center' }}>{endMessage}</StyledEndMessage> : null}
          loader={!error && data.length > 0 ? <StyledLoader type="ThreeDots" color={`${theme.colors.white}`} /> : null}
        >
          {title && <Title titleType="h2">{title}</Title>}
          <StyledList>
            {data.map((data) => (
              <ProductCard key={data.id} gamesData={data} />
            ))}
          </StyledList>
        </InfiniteScroll>
      )}
    </StyledListWrapper>
  )
}

export default GamesList
