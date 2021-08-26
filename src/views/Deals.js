import RoundButton from 'components/atoms/RoundButton/RoundButton'
import { customSmoothScrollTo } from 'helpers/customSmoothScrollTo'

import React from 'react'
import { pathsList } from 'routes'
import WishList from 'components/oraganisms/WishList/WishList'
import { Route } from 'react-router-dom'
import InfiniteDealsList from 'components/oraganisms/InfiniteDealsList/InfiniteDealsList'
import { Wrapper } from './Deals.style'
import Title from 'components/atoms/Title/Title'
const { deals, wishList } = pathsList
const Deals = () => {
  const handleOnClick = () => customSmoothScrollTo()

  return (
    <Wrapper>
      <Route exact path={`${deals}`}>
        <Title titleType="h1">Deals</Title>
        <InfiniteDealsList />
      </Route>
      <Route path={`${deals}${wishList}`}>
        <Title titleType="h1">WishList</Title>
        <WishList />
      </Route>
      <RoundButton isReturn onClick={handleOnClick} />
    </Wrapper>
  )
}

export default Deals
