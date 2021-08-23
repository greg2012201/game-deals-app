import { Wrapper } from '../DealsList.js/DealsList.style'
import InfiniteScroll from 'react-infinite-scroll-component'
import { StyledEndMessage } from '../GamesList/GamesList.style'
import { useSelector } from 'react-redux'
import { useFirestore } from 'react-redux-firebase'
import DealsListItemSkeletonLoader from 'components/molecules/DealsListItem/DealsListItemSkeletonLoader'
import Loader from 'react-loader-spinner'
import { useTheme } from 'styled-components'
import ErrorPage from 'components/molecules/ErrorPage/ErrorPage'
import DealsList from '../DealsList.js/DealsList'
import { useDealsListInfiniteScroll } from './useDealsListInfiniteScroll'
import { useGetDealsListQuery } from 'features/DealsApi/DealsApi'
import { findDuplicate } from 'helpers/findDuplicate'
const pageSize = 40
const InfiniteDealsList = () => {
  const theme = useTheme()
  const options = useSelector((state) => state.dealsListOptions)

  const { handleFetchMoreData, data } = useDealsListInfiniteScroll({ pageSize, options, query: useGetDealsListQuery })

  const firestore = useFirestore()
  const wishList = useSelector((state) => state.firestore.ordered.wishList)

  const handleOnClick = (selectedDeal) => {
    const isSelectedItem = findDuplicate(selectedDeal, wishList)
    if (!isSelectedItem) {
      firestore.collection('wishList').add(selectedDeal)
    } else {
      firestore.collection('wishList').doc(isSelectedItem.id).delete()
    }
  }

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
      <DealsList data={{ wishList, ...data }} handleOnClick={handleOnClick} />
    </InfiniteScroll>
  )
}

export default InfiniteDealsList
