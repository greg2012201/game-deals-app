import InfiniteScroll from 'react-infinite-scroll-component'
import { StyledEndMessage } from '../GamesList/GamesList.style'
import { useSelector } from 'react-redux'
import { useFirestore } from 'react-redux-firebase'
import Loader from 'react-loader-spinner'
import { useTheme } from 'styled-components'
import DealsList from '../DealsList.js/DealsList'
import { useDealsListInfiniteScroll } from './useDealsListInfiniteScroll'
import { useGetDealsListQuery } from 'features/DealsApi/DealsApi'
import { useWishList } from '../WishList/useWishList'
const pageSize = 40
const InfiniteDealsList = () => {
  const theme = useTheme()
  const options = useSelector((state) => state.dealsListOptions)

  const { handleFetchMoreData, data } = useDealsListInfiniteScroll({ pageSize, options, query: useGetDealsListQuery })

  const { handleToggleItemInStore } = useWishList()
  return (
    <InfiniteScroll
      dataLength={data.list.length}
      next={handleFetchMoreData}
      hasMore={data.hasMoreItems}
      endMessage={data.isLoadingMore && <StyledEndMessage style={{ textAlign: 'center' }}>this is the end</StyledEndMessage>}
      loader={!data.isError && <Loader type="ThreeDots" color={`${theme.colors.white}`} style={{ textAlign: 'center' }} />}
    >
      <DealsList data={data} handleOnClick={handleToggleItemInStore} />
    </InfiniteScroll>
  )
}

export default InfiniteDealsList
