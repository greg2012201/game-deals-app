import { useFirestore } from 'react-redux-firebase';
import { useSelector } from 'react-redux';
import { useWishListStateMachine } from './useWishListStateMachine';
import { useEffect, useState } from 'react';
export const useWishListFirestore = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isEmpty, setIsEmpty] = useState(true);
  const firestore = useFirestore();
  const collection = firestore.collection('wishList');
  const wishList = useSelector((state) => state.firestore.ordered.wishList);
  const { dispatch, actionTypes, error } = useWishListStateMachine();
  useEffect(() => {
    if (!wishList) return;
    setIsLoading(false);
    setIsEmpty(false);
    if (wishList.length === 0) {
      setIsEmpty(true);
    }
  }, [wishList]);
  const findItemsInWishListFirestore = (plain) => {
    return wishList.find((obj) => {
      return obj.plain === plain;
    });
  };
  const handleOnClick = (payload) => {
    return toggleItemInStore(payload);
  };

  const toggleItemInStore = (selectedDeal) => {
    const foundItemInStore = findItemsInWishListFirestore(selectedDeal.plain);
    if (!foundItemInStore) {
      addToStore(selectedDeal);
    } else {
      removeFromStore(foundItemInStore.id);
    }
  };

  const removeFromStore = async (id) => {
    try {
      await collection.doc(id).delete();
    } catch (err) {
      return dispatch({ type: actionTypes.error });
    }
  };

  const removeAllFromStore = async () => {
    const batch = firestore.batch();

    try {
      const items = (await collection.get()).docs;
      items.map((item) => batch.delete(item.ref));
      await batch.commit();
    } catch (err) {
      return dispatch({ type: actionTypes.error });
    }
  };
  const addToStore = async (payload) => {
    try {
      await collection.add(payload);
    } catch (err) {
      return dispatch({ type: actionTypes.error });
    }
  };
  return {
    wishList,
    handleOnClick,
    addToStore,
    removeFromStore,
    removeAllFromStore,
    error,
    findItemsInWishListFirestore,
    isLoading,
    isEmpty,
  };
};
