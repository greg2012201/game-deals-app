import { useEffect } from 'react';
import { useGetActualPricesQuery } from 'features/WishListApi/WishListApi';
import { useWishListStateMachine } from './useWishListStateMachine';
import { useWishListFirestore } from './useWishListFirestore';

export const useWishList = () => {
  const {
    dispatch,
    actionTypes,
    state: { hasLoader, isEmpty },
  } = useWishListStateMachine();
  const { wishList, addToStore, removeFromStore, removeAllFromStore, error } = useWishListFirestore();
  const { data: pricesData, isLoading } = useGetActualPricesQuery({ plains: wishList }, { skip: !wishList || wishList.length === 0 || !hasLoader });
  useEffect(() => {
    if (isLoading || !wishList) return;
    dispatch({ type: actionTypes.checkHasItems, payload: wishList });
    dispatch({ type: actionTypes.hasListLoaded });
    return () => {
      return dispatch({ type: actionTypes.hasListLoaded });
    };
  }, [isLoading, wishList, dispatch, actionTypes.hasListLoaded, actionTypes.checkHasItems]);

  const handleOnClick = ({ isWishList, id, payload }) => {
    if (isWishList) {
      return removeFromStore(id);
    } else {
      return toggleItemInStore(payload);
    }
  };
  const findDuplicatedItemsByPlains = (plain, items) => {
    return items.find((obj) => {
      return obj.plain === plain;
    });
  };
  const compareItemsPriceByPlain = (plain) => {
    const transformedData = pricesData.actualPrices.find((e) => e.plain === plain);
    return transformedData;
  };

  const toggleItemInStore = (selectedDeal) => {
    const foundItemInStore = findDuplicatedItemsByPlains(selectedDeal.plain, wishList);
    if (!foundItemInStore) {
      addToStore(selectedDeal);
    } else {
      removeFromStore(foundItemInStore.id);
    }
  };
  return {
    data: { list: wishList, isLoading: hasLoader, isEmpty },
    compareItemsPriceByPlain,
    handleOnClick,
    toggleItemInStore,
    removeAllFromStore,
    findDuplicatedItemsByPlains,
    error,
  };
};
