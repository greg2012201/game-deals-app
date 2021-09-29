import { useFirestore } from 'react-redux-firebase';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
export const useWishListFirestore = () => {
  const [isEmpty, setIsEmpty] = useState(true);
  const firestore = useFirestore();
  const user = useSelector((state) => state.firebase.auth.uid);
  const wishList = useSelector((state) => {
    return state.firestore.ordered.userWishList;
  });
  const userCollection = firestore.collection('users').doc(user).collection('wishList');
  const isUserDataReady = useSelector((state) => state.firestore.data.userWishList);
  useEffect(() => {
    if (!wishList) return;
    setIsEmpty(false);
    if (wishList.length === 0) {
      setIsEmpty(true);
    }
  }, [wishList, isUserDataReady]);
  const findItemsInWishListFirestore = (plain) => {
    if (!wishList) return;
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
    userCollection.doc(id).delete();
  };
  const removeAllFromStore = async () => {
    const batch = firestore.batch();
    const items = (await userCollection.get()).docs;
    items.map((item) => batch.delete(item.ref));
    await batch.commit();
  };
  const addToStore = async (payload) => {
    userCollection.add(payload);
  };

  return {
    wishList,
    handleOnClick,
    addToStore,
    removeFromStore,
    removeAllFromStore,
    findItemsInWishListFirestore,
    isEmpty,
    isUserDataReady,
  };
};
