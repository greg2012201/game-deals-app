import DealsListItem from 'components/molecules/DealsListItem/DealsListItem'
import React from 'react'
import { Wrapper } from './DealsList.style'
const DealsList = ({ data, isWishList = false, handleOnClick, isButtonRemove, updatedPrice = null }) => {
  return (
    <Wrapper>
      {data.list.map((item, i) => (
        <DealsListItem
          handleOnClick={handleOnClick}
          isWishList={isWishList}
          currency={data.currency}
          data={item}
          key={i}
          updatedPrice={updatedPrice}
        />
      ))}
    </Wrapper>
  )
}

export default DealsList
