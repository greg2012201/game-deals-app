import RoundButton from 'components/atoms/RoundButton/RoundButton'
import DealsList from 'components/oraganisms/DealsList/DealsList'
import { customSmoothScrollTo } from 'helpers/customSmoothScrollTo'
import { useSelector } from 'react-redux'
import { useDealsListInfiniteScroll } from 'components/oraganisms/DealsList/useDealsListInfiniteScroll'
import { useGetDealsListQuery } from 'features/DealsApi/DealsApi'
import React from 'react'
import { pathsList } from 'routes'
import { StyledLinkButton, Wrapper } from './Deals.style'
import WishList from 'components/oraganisms/WishList/WishList'
import { Route } from 'react-router-dom'

const { deals, whishList } = pathsList
const Deals = () => {
  const options = useSelector((state) => state.dealsListOptions)
  const { handleFetchMoreData, data } = useDealsListInfiniteScroll({ options, query: useGetDealsListQuery })
  const handleOnClick = () => customSmoothScrollTo()

  return (
    <Wrapper>
      <Route exact path={`${deals}`}>
        <StyledLinkButton to={`${deals}${whishList}`}>Go to whishlist </StyledLinkButton>
        <DealsList handleFetchMoreData={handleFetchMoreData} data={data} />
      </Route>
      <Route path={`${deals}${whishList}`}>
        <WishList />
      </Route>
      <RoundButton isReturn onClick={handleOnClick} />
    </Wrapper>
  )
}

export default Deals
