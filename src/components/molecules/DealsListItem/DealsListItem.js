import Title from 'components/atoms/Title/Title'
import React from 'react'
import { StyledDiscount, StyledListItem } from './DealsListItem.style'
import AddButton from 'components/atoms/AddButton/AddButton'
import { useWishList } from 'components/oraganisms/WishList/useWishList'
const DealsListItem = ({ isWishList, data, data: { id, title, plain, oldPrice, discount, newPrice, buy, shop, currency } }) => {
  const {
    handleOnClick,
    comparePrice: updatedPrice,
    findDuplicatedItemsByPlains,
    data: { list },
  } = useWishList()
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
      <AddButton isRemove={findDuplicatedItemsByPlains(data.plain, list) || isWishList} onClick={() => handleOnClick({ isWishList, data, id })} />
    </StyledListItem>
  )
}
export default DealsListItem
