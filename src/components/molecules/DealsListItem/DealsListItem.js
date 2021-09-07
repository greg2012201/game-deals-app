import Title from 'components/atoms/Title/Title';
import React from 'react';
import { StyledDiscount, StyledListItem } from './DealsListItem.style';
import SwitchButton from 'components/atoms/SwitchButton/SwitchButton';
const DealsListItem = ({ handleOnClick, isOnWishList, data: dealData, data: { title, oldPrice, discount, newPrice, buy, shop, currency } }) => {
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
        <a target={'_blank'} rel={'noreferrer'} href={buy}>
          {shop.name}
        </a>
      </p>
      <SwitchButton isRemove={isOnWishList} onClick={() => handleOnClick(dealData)} />
    </StyledListItem>
  );
};
export default DealsListItem;
