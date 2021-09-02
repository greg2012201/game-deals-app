import { useFirestore } from 'react-redux-firebase';
import { useSelector } from 'react-redux';
import { useWishListStateMachine } from './useWishListStateMachine';
export const useWishListFirestore = () => {
  const firestore = useFirestore();
  const collection = firestore.collection('wishList');
  const wishList = useSelector((state) => state.firestore.ordered.wishList);
  const { dispatch, actionTypes, error } = useWishListStateMachine();

  const removeFromStore = async (id) => {
    try {
      await collection.doc(id).delete();
      return dispatch({ type: actionTypes.success });
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
      return dispatch({ type: actionTypes.success });
    } catch (err) {
      return dispatch({ type: actionTypes.error });
    }
  };
  const addToStore = async (payload) => {
    try {
      await collection.add(payload);
      return dispatch({ type: actionTypes.success });
    } catch (err) {
      return dispatch({ type: actionTypes.error });
    }
  };

  return { wishList, addToStore, removeFromStore, removeAllFromStore, error };
};
