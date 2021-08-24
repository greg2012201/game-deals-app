import Title from 'components/atoms/Title/Title'
import React from 'react'
import { StyledDiscount, StyledListItem } from './DealsListItem.style'

import AddButton from 'components/atoms/AddButton/AddButton'
import { useSelector } from 'react-redux'
import { findDuplicate } from 'helpers/findDuplicate'
const DealsListItem = ({
  isWishList,
  handleOnClick,
  data,
  data: { id, title, plain, oldPrice, discount, newPrice, buy, shop, currency },
  updatedPrice,
}) => {
  const wishList = useSelector((state) => state.firestore.ordered.wishList)
  return (
    <StyledListItem>
      <Title titleType="h3">{title}</Title>
      <p>
        Old Price:{' '}
        <span>
          {oldPrice} {currency}
        </span>
      </p>
      <p>
        Discount: <StyledDiscount value={isWishList ? updatedPrice(plain).discount : discount}>{discount}%</StyledDiscount>
      </p>
      <p>
        New Price:{' '}
        <span>
          {isWishList ? updatedPrice(plain).newPrice : newPrice} {currency}
        </span>
      </p>
      <p>
        Shop:{' '}
        <a target={'_blank'} rel={'noreferrer'} href={buy}>
          {shop.name}
        </a>
      </p>
      <AddButton isRemove={findDuplicate(data, wishList) || isWishList} onClick={isWishList ? () => handleOnClick(id) : () => handleOnClick(data)} />
    </StyledListItem>
  )
}
export default DealsListItem
