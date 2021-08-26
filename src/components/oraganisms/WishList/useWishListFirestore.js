import { useFirestore } from 'react-redux-firebase'
import { useSelector } from 'react-redux'
import { useWishListStateMachine } from './useWishListStateMachine'
import { useFirestoreConnect } from 'react-redux-firebase'
export const useWishListFirestore = () => {
  useFirestoreConnect('wishList')
  const firestore = useFirestore()
  const collection = firestore.collection('wishList')
  const wishList = useSelector((state) => state.firestore.ordered.wishList)
  const {
    dispatch,
    actionTypes,
    state: { isItemSwitching },
    error,
  } = useWishListStateMachine()

  const removeFromStore = async (id) => {
    dispatch({ type: actionTypes.switchItem })
    try {
      await collection.doc(id).delete()
      return dispatch({ type: actionTypes.success })
    } catch (err) {
      return dispatch({ type: actionTypes.error })
    }
  }
  const removeAllFromStore = async () => {
    dispatch({ type: actionTypes.switchItem })
    const batch = firestore.batch()

    try {
      const items = (await collection.get()).docs
      items.map((item) => batch.delete(item.ref))
      await batch.commit()
      return dispatch({ type: actionTypes.success })
    } catch (err) {
      return dispatch({ type: actionTypes.error })
    }
  }
  const addToStore = async (payload) => {
    dispatch({ type: actionTypes.switchItem })
    try {
      await collection.add(payload)
      return dispatch({ type: actionTypes.success })
    } catch (err) {
      return dispatch({ type: actionTypes.error })
    }
  }

  return { wishList, addToStore, removeFromStore, removeAllFromStore, isItemSwitching, error }
}
