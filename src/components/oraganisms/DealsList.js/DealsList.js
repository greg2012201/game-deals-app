import DealsListItem from 'components/molecules/DealsListItem/DealsListItem';
import DealsListItemSkeletonLoader from 'components/molecules/DealsListItem/DealsListItemSkeletonLoader';
import ErrorPage from 'components/molecules/ErrorPage/ErrorPage';
import React from 'react';
import { useWishList } from '../WishList/useWishList';
import { Wrapper } from './DealsList.style';
import { v4 as uuidv4 } from 'uuid';
const DealsList = ({ data, isWishList = false }) => {
  const {
    handleOnClick,
    findItemsPriceByPlain: updatePrice,
    findDuplicatedItemsByPlains,
    data: { list: wishListData },
  } = useWishList();

  return data.isLoading ? (
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
            isOnWishList={findDuplicatedItemsByPlains(item.plain, wishListData)}
            isWishList={isWishList}
            updatePrice={updatePrice}
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
