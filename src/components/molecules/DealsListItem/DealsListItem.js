import Title from 'components/atoms/Title/Title'
import React from 'react'
import { StyledDiscount, StyledListItem } from './DealsListItem.style'
import { useSelector } from 'react-redux'
import { useFirestore } from 'react-redux-firebase'
import AddButton from 'components/atoms/AddButton/AddButton'

const DealsListItem = ({ data, data: { title, plain, price_old: oldPrice, price_cut: discount, price_new: newPrice, urls, shop }, currency }) => {
  const firestore = useFirestore()
  const wishList = useSelector((state) => state.firestore.ordered.wishList)
  const findDuplicate = (item, items) => {
    return items.find(({ plain }) => plain === item.plain)
  }
  const handleOnClick = (selectedDeal) => {
    const isSelectedItem = findDuplicate(selectedDeal, wishList)
    if (!isSelectedItem) {
      firestore.collection('wishList').add(selectedDeal)
    } else {
      firestore.collection('wishList').doc(isSelectedItem.id).delete()
    }
  }

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
      <AddButton isRemove={findDuplicate(data, wishList)} onClick={() => handleOnClick({ plain })} />
    </StyledListItem>
  )
}

export default DealsListItem
