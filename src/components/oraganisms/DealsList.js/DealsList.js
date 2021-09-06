import DealsListItem from 'components/molecules/DealsListItem/DealsListItem';
import DealsListItemSkeletonLoader from 'components/molecules/DealsListItem/DealsListItemSkeletonLoader';
import ErrorPage from 'components/molecules/ErrorPage/ErrorPage';
import React from 'react';
import { Wrapper } from './DealsList.style';
import { v4 as uuidv4 } from 'uuid';

const DealsList = ({ data, handleOnClick, findItemsInWishListFirestore, firestoreConnecting, isWishList = false }) => {
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
            isOnWishList={findItemsInWishListFirestore(item.plain)}
            isWishList={isWishList}
            data={item}
            handleOnClick={handleOnClick}
            key={uuidv4()}
          />
        );
      })}
    </Wrapper>
  );
};

export default DealsList;
