import { useEffect, useState } from 'react'
import { useFirestore } from 'react-redux-firebase'
import { useSelector } from 'react-redux'
import { useGetActualPricesQuery } from 'features/WishListApi/WishListApi'
import { useFirestoreConnect } from 'react-redux-firebase'

export const useWishList = () => {
  const firestore = useFirestore()
  const [hasLoader, setLoader] = useState(true)
  const [isItemSwitching, setIsItemSwitching] = useState(false)
  const [error, setError] = useState(false)
  const wishList = useSelector((state) => state.firestore.ordered.wishList)
  const { data, isLoading } = useGetActualPricesQuery({ plains: wishList }, { skip: !wishList || wishList.length === 0 || !hasLoader })
  useFirestoreConnect('wishList')
  useEffect(() => {
    if (isLoading || !wishList) return
    setLoader(false)
    return () => setLoader(false)
  }, [isLoading, wishList])

  const handleOnClick = ({ isWishList, id, data }) => {
    if (isWishList) {
      return removeFromStore(id)
    } else {
      return toggleItemInStore(data)
    }
  }
  const findDuplicatedItemsByPlains = (plain, items) => {
    return items.find((obj) => {
      return obj.plain === plain
    })
  }
  const comparePrice = (plain) => {
    const transformedData = data.actualPrices.find((e) => e.plain === plain)
    return transformedData
  }
  const removeFromStore = async (id) => {
    setIsItemSwitching(true)
    try {
      await firestore.collection('wishList').doc(id).delete()
      return setIsItemSwitching(false)
    } catch (err) {
      setIsItemSwitching(false)
      setError(true)
    }
  }
  const removeAllFromStore = async () => {
    setIsItemSwitching(true)

    const batch = firestore.batch()

    try {
      const items = (await firestore.collection('wishList').get()).docs
      items.map((item) => batch.delete(item.ref))
      batch.commit()
      return setIsItemSwitching(false)
    } catch (err) {
      setIsItemSwitching(false)
      setError(true)
    }
  }
  const addToStore = async (payload) => {
    setIsItemSwitching(true)
    try {
      await firestore.collection('wishList').add(payload)
      return setIsItemSwitching(false)
    } catch (err) {
      setIsItemSwitching(false)
      setError(true)
    }
  }
  const toggleItemInStore = (selectedDeal) => {
    const isSelectedItem = findDuplicatedItemsByPlains(selectedDeal.plain, wishList)
    if (!isSelectedItem) {
      addToStore(selectedDeal)
    } else {
      removeFromStore(isSelectedItem.id)
    }
  }
  return {
    data: { list: wishList, isLoading: hasLoader },
    comparePrice,
    handleOnClick,
    toggleItemInStore,
    removeAllFromStore,
    findDuplicatedItemsByPlains,
    isItemSwitching,
    error,
  }
}
