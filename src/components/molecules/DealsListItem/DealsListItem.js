import Title from 'components/atoms/Title/Title'
import React from 'react'
import { StyledAddButton, StyledDiscount, StyledListItem } from './DealsListItem.style'

const DealsListItem = ({ data: { title, price_old: oldPrice, price_cut: discount, price_new: newPrice, urls, shop }, currency }) => {
  return (
    <StyledListItem>
      <Title titleType="h2">{title}</Title>
      <p>
        Price:{' '}
        <span>
          {oldPrice} {currency}
        </span>
      </p>
      <p>
        Discount: <StyledDiscount value={discount}>{discount}%</StyledDiscount>
      </p>
      <p>
        New Price:{' '}
        <span>
          {newPrice} {currency}
        </span>
      </p>
      <p>
        Shop:{' '}
        <a target={'_blank'} rel={'noreferrer'} href={urls.buy}>
          {shop.name}
        </a>
      </p>
      <StyledAddButton>add to whishlist</StyledAddButton>
    </StyledListItem>
  )
}

export default DealsListItem
