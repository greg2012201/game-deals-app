import React from 'react'
import DealsList from '../DealsList.js/DealsList'
import { useWishList } from './useWishList'

const WishList = () => {
  const { data } = useWishList()

  return <DealsList isWishList data={data} />
}

export default WishList
