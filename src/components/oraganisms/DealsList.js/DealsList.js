import DealsListItem from 'components/molecules/DealsListItem/DealsListItem';
import DealsListItemSkeletonLoader from 'components/molecules/DealsListItem/DealsListItemSkeletonLoader';
import ErrorPage from 'components/molecules/ErrorPage/ErrorPage';
import React from 'react';
import { Wrapper } from './DealsList.style';

const DealsList = ({ data, handleOnClick, checkIsOnWishList, firestoreConnecting, isWishList = false }) => {
  return data.isLoading || firestoreConnecting ? (
    data.isError ? (
      <ErrorPage>Something went wrong, we couldn't load your content</ErrorPage>
    ) : (
      <Wrapper>
        {Array(20)
          .fill('')
          .map((_blank, i) => (
            <DealsListItemSkeletonLoader key={i} />
          ))}
      </Wrapper>
    )
  ) : (
    <Wrapper>
      {data.list.map((item, i) => {
        return (
          <DealsListItem isOnWishList={!isWishList ? checkIsOnWishList(item.plain) : isWishList} data={item} handleOnClick={handleOnClick} key={i} />
        );
      })}
    </Wrapper>
  );
};
export default DealsList;
