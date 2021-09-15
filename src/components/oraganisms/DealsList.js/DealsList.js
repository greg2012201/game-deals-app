import DealsListItem from 'components/molecules/DealsListItem/DealsListItem';
import DealsListItemSkeletonLoader from 'components/molecules/DealsListItem/DealsListItemSkeletonLoader';
import React from 'react';
import { Wrapper } from './DealsList.style';
import { useErrorPage } from 'hooks/useErrorPage';

const DealsList = ({
  data,
  handleOnClick,
  checkIsOnWishList,
  firestoreConnecting,
  isWishList = false,
}) => {
  useErrorPage(data.isError);

  return (
    <Wrapper>
      {data.isLoading || firestoreConnecting
        ? Array(20)
            .fill('')
            .map((_blank, i) => <DealsListItemSkeletonLoader key={i} />)
        : data.list.map((item, i) => {
            return (
              <DealsListItem
                isOnWishList={!isWishList ? checkIsOnWishList(item.plain) : isWishList}
                data={item}
                handleOnClick={handleOnClick}
                key={i}
              />
            );
          })}
      ;
    </Wrapper>
  );
};
export default DealsList;
