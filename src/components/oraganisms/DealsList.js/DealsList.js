import DealsListItem from 'components/molecules/DealsListItem/DealsListItem';
import DealsListItemSkeletonLoader from 'components/molecules/DealsListItem/DealsListItemSkeletonLoader';
import ErrorPage from 'components/molecules/ErrorPage/ErrorPage';
import React from 'react';
import { Wrapper } from './DealsList.style';
import { v4 as uuidv4 } from 'uuid';

const DealsList = ({ data, handleOnClick, checkIsOnWishList, firestoreConnecting, isWishList = false }) => {
  return data.isLoading || firestoreConnecting ? (
    data.isError ? (
      <ErrorPage>Something went wrong, we couldn't load your content</ErrorPage>
    ) : (
      <Wrapper>
        {Array(20)
          .fill('')
          .map(() => (
            <DealsListItemSkeletonLoader key={uuidv4()} />
          ))}
      </Wrapper>
    )
  ) : (
    <Wrapper>
      {data.list.map((item) => {
        return (
          <DealsListItem
            isOnWishList={!isWishList ? checkIsOnWishList(item.plain) : isWishList}
            data={item}
            handleOnClick={handleOnClick}
            key={uuidv4()}
          />
        );
      })}
    </Wrapper>
  );
};
// CHECK IS ON WISHLIST
export default DealsList;
