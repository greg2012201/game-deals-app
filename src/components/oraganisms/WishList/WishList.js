import React from 'react'
import DealsList from '../DealsList.js/DealsList'
import { useWishList } from './useWishList'

const WishList = () => {
  const { data, comparePrice, handleOnClick } = useWishList()

  return <DealsList isWishList data={data} updatedPrice={comparePrice} handleOnClick={handleOnClick} />
}

export default WishList
