import DealsListItem from 'components/molecules/DealsListItem/DealsListItem'
import { Wrapper } from './DealsList.style'
import { useSelector } from 'react-redux'
import InfiniteScroll from 'react-infinite-scroll-component'
import { StyledEndMessage } from '../GamesList/GamesList.style'
import { useDealsListQuery } from 'components/oraganisms/DealsList/useDealsListQuery'
const DealsList = () => {
  const options = useSelector((state) => state.dealsListOptions)
  const { handleFetchMoreData, data } = useDealsListQuery({ options })

  return data.isLoading ? (
    <h1>LOADER</h1>
  ) : (
    <InfiniteScroll
      scrollThreshold={'500px'}
      dataLength={data.list.length}
      next={handleFetchMoreData}
      hasMore={data.hasMoreItems}
      endMessage={data.isLoadingMore && <StyledEndMessage style={{ textAlign: 'center' }}>this is the end</StyledEndMessage>}
      loader={'loading'}
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
