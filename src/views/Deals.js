import RoundButton from 'components/atoms/RoundButton/RoundButton'
import { customSmoothScrollTo } from 'helpers/customSmoothScrollTo'

import React from 'react'
import { pathsList } from 'routes'
import { StyledLinkButton, Wrapper } from './Deals.style'
import WishList from 'components/oraganisms/WishList/WishList'
import { Route } from 'react-router-dom'
import { useFirestoreConnect } from 'react-redux-firebase'
import InfiniteDealsList from 'components/oraganisms/InfiniteDealsList/InfiniteDealsList'

const { deals, whishList } = pathsList
const Deals = () => {
  useFirestoreConnect('wishList')
  const handleOnClick = () => customSmoothScrollTo()

  return (
    <Wrapper>
      <Route exact path={`${deals}`}>
        <StyledLinkButton to={`${deals}${whishList}`}>Go to whishlist </StyledLinkButton>
        <InfiniteDealsList />
      </Route>
      <Route path={`${deals}${whishList}`}>
        <WishList />
      </Route>
      <RoundButton isReturn onClick={handleOnClick} />
    </Wrapper>
  )
}

export default Deals
