import Title from 'components/atoms/Title/Title';
import React from 'react';
import { StyledDiscount, StyledListItem, StyledP } from './DealsListItem.style';
import SwitchButton from 'components/atoms/SwitchButton/SwitchButton';
const DealsListItem = ({
  handleOnClick,
  isOnWishList,

  data: dealData,
  data: { title, oldPrice, discount, newPrice, buy, shop, currency, isExpired },
}) => {
  return (
    <StyledListItem>
      <Title titleType="h3">{title}</Title>
      <StyledP>
        Old Price:{' '}
        <span>
          {oldPrice} {currency}
        </span>
      </StyledP>
      {!isExpired ? (
        <>
          <StyledP>
            Discount: <StyledDiscount value={discount}>{discount}%</StyledDiscount>
          </StyledP>
          <StyledP>
            New Price:{' '}
            <span>
              {newPrice} {currency}
            </span>
          </StyledP>
          <StyledP>
            Shop:{' '}
            <a target={'_blank'} rel={'noreferrer'} href={buy}>
              {shop.name}
            </a>
          </StyledP>
        </>
      ) : (
        <StyledP isExpired>
          There is no discount. You can remove this game from WishList or wait for new discounts.
        </StyledP>
      )}

      <SwitchButton isRemove={isOnWishList} onClick={() => handleOnClick(dealData)} />
    </StyledListItem>
  );
};
export default DealsListItem;
