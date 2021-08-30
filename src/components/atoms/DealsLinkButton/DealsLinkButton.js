import React from 'react';
import { Link } from 'react-router-dom';
import { pathsList } from 'routes';
import { StyledButton } from './DealsLinkButton.style';
const { deals, wishList } = pathsList;
const DealsLinkButton = ({ isWishList }) => {
  return (
    <Link style={{ textDecoration: 'none' }} to={isWishList ? deals : `${deals}${wishList}`}>
      <StyledButton isWishList={isWishList}>{isWishList ? 'Go to the WishList' : 'Go to the Deals'} </StyledButton>
    </Link>
  );
};

export default DealsLinkButton;
