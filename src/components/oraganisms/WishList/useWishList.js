import { useEffect } from 'react';
import { useGetActualPricesQuery } from 'features/WishListApi/WishListApi';
import { useWishListStateMachine } from './useWishListStateMachine';
import { useWishListFirestore } from './useWishListFirestore';

export const useWishList = () => {
  const {
    dispatch,
    actionTypes,
    state,
    state: { hasLoader },
  } = useWishListStateMachine();
  const { wishList, removeAllFromStore, error, findItemsInWishListFirestore, handleOnClick } = useWishListFirestore();

  const { data: pricesData, isLoading } = useGetActualPricesQuery({ plains: wishList }, { skip: !wishList || wishList.length === 0 || !hasLoader });

  useEffect(() => {
    if (isLoading || !wishList) return;
    dispatch({ type: actionTypes.hasListLoaded });
    dispatch({ type: actionTypes.updatePrices, payload: { pricesData, wishList } });

    return () => {
      return dispatch({ type: actionTypes.hasListLoaded });
    };
  }, [isLoading, wishList, dispatch, actionTypes.hasListLoaded, actionTypes.checkHasItems, actionTypes.updatePrices, pricesData]);

  return {
    data: { list: state.data, isLoading: hasLoader },
    handleOnClick,
    removeAllFromStore,
    error,
    hasLoader,
    findItemsInWishListFirestore,
  };
};
