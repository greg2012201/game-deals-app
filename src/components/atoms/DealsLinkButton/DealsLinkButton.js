import React from 'react';
import { pathsList } from 'routes';
import { Link } from 'react-router-dom';
import { StyledButton, Wrapper } from './DealsLinkButton.style';
const { deals, wishList } = pathsList;
const DealsLinkButton = ({ isOnTheWishList }) => {
  return (
    <Wrapper isOnTheWishList={isOnTheWishList}>
      <Link to={isOnTheWishList ? deals : `${deals}${wishList}`}>
        <StyledButton isOnTheWishList={isOnTheWishList}>{isOnTheWishList ? 'Go to the Deals' : 'Go to the WishList'} </StyledButton>
      </Link>
    </Wrapper>
  );
};

export default DealsLinkButton;
