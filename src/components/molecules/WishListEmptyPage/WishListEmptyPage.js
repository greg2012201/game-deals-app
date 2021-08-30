import DealsLinkButton from 'components/atoms/DealsLinkButton/DealsLinkButton';
import { Paragraph } from 'components/atoms/Paragraph/Paragraph';
import React from 'react';
const WishListEmptyPage = () => {
  return (
    <>
      <Paragraph>There is nothing here yet. Go to the Deals page and add some discounted games that intrest you.</Paragraph>
      <DealsLinkButton isWishList />
    </>
  );
};

export default WishListEmptyPage;
