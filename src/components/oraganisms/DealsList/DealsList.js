import DealsListItem from 'components/molecules/DealsListItem/DealsListItem'
import { Wrapper } from './DealsList.style'
import InfiniteScroll from 'react-infinite-scroll-component'
import { StyledEndMessage } from '../GamesList/GamesList.style'

import DealsListItemSkeletonLoader from 'components/molecules/DealsListItem/DealsListItemSkeletonLoader'
import Loader from 'react-loader-spinner'
import { useTheme } from 'styled-components'
import ErrorPage from 'components/molecules/ErrorPage/ErrorPage'

const DealsList = ({ data, handleFetchMoreData }) => {
  const theme = useTheme()

  return data.isLoading ? (
    data.isError ? (
      <ErrorPage>Something went wrong, we couldn't load your content</ErrorPage>
    ) : (
      <Wrapper>
        {Array(20)
          .fill('')
          .map((e, i) => (
            <DealsListItemSkeletonLoader key={i} />
          ))}
      </Wrapper>
    )
  ) : (
    <InfiniteScroll
      dataLength={data.list.length}
      next={handleFetchMoreData}
      hasMore={data.hasMoreItems}
      endMessage={data.isLoadingMore && <StyledEndMessage style={{ textAlign: 'center' }}>this is the end</StyledEndMessage>}
      loader={!data.isError && <Loader type="ThreeDots" color={`${theme.colors.white}`} style={{ textAlign: 'center' }} />}
    >
      <Wrapper>
        {data.list.map((item, i) => (
          <DealsListItem currency={data.currency} data={item} key={i} />
        ))}
      </Wrapper>
    </InfiniteScroll>
  )
}

export default DealsList
