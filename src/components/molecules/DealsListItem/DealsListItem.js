import Title from 'components/atoms/Title/Title';
import React from 'react';
import { StyledDiscount, StyledListItem } from './DealsListItem.style';
import SwitchButton from 'components/atoms/SwitchButton/SwitchButton';
import { useWishList } from 'components/oraganisms/WishList/useWishList';
const DealsListItem = ({ isWishList, data, data: { id, title, plain, oldPrice, discount, newPrice, buy, shop, currency } }) => {
  const {
    handleOnClick,
    compareItemsPriceByPlain: updatePrice,
    findDuplicatedItemsByPlains,
    data: { list },
  } = useWishList();
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
        Discount: <StyledDiscount value={isWishList ? updatePrice(plain).discount : discount}>{discount}%</StyledDiscount>
      </p>
      <p>
        New Price:{' '}
        <span>
          {isWishList ? updatePrice(plain).newPrice : newPrice} {currency}
        </span>
      </p>
      <p>
        Shop:{' '}
        <a target={'_blank'} rel={'noreferrer'} href={buy}>
          {shop.name}
        </a>
      </p>
      <SwitchButton isRemove={findDuplicatedItemsByPlains(data.plain, list) || isWishList} onClick={() => handleOnClick({ isWishList, data, id })} />
    </StyledListItem>
  );
};
export default DealsListItem;
