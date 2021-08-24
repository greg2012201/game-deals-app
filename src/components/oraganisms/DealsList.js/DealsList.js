import DealsListItem from 'components/molecules/DealsListItem/DealsListItem'
import DealsListItemSkeletonLoader from 'components/molecules/DealsListItem/DealsListItemSkeletonLoader'
import ErrorPage from 'components/molecules/ErrorPage/ErrorPage'
import React from 'react'
import { Wrapper } from './DealsList.style'
const DealsList = ({ data, isWishList = false, handleOnClick, updatedPrice = null }) => {
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
    <Wrapper>
      {data.list.map((item, i) => (
        <DealsListItem handleOnClick={handleOnClick} isWishList={isWishList} data={item} key={i} updatedPrice={updatedPrice} />
      ))}
    </Wrapper>
  )
}

export default DealsList
