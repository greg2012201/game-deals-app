import Title from 'components/atoms/Title/Title'
import db from 'db/firebase'
import React, { useEffect, useState } from 'react'
import { StyledAddButton, StyledDiscount, StyledListItem } from './DealsListItem.style'

const DealsListItem = ({ data: { title, plain, price_old: oldPrice, price_cut: discount, price_new: newPrice, urls, shop }, currency }) => {
  const [deals, setDeals] = useState([])

  const handleOnClick = (selectedDeal) => {
    const hasSelectedItem = deals.find(({ plain }) => plain === selectedDeal.plain)

    if (!hasSelectedItem) {
      db.collection('wishList').add(selectedDeal)
    } else {
      db.collection('wishList').doc(hasSelectedItem.id).delete()
    }
  }
  useEffect(() => {
    db.collection('wishList').onSnapshot((snapshot) => {
      setDeals(
        snapshot.docs.map((doc) => {
          return { id: doc.id, plain: doc.data().plain }
        })
      )
    })
  }, [])
  return (
    <StyledListItem>
      <Title titleType="h3">{title}</Title>
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
      {!deals.find((deal) => deal.plain === plain) ? (
        <StyledAddButton onClick={() => handleOnClick({ plain })}>add to whishlist</StyledAddButton>
      ) : (
        <StyledAddButton onClick={() => handleOnClick({ plain })}>REMOVE</StyledAddButton>
      )}
    </StyledListItem>
  )
}

export default DealsListItem
