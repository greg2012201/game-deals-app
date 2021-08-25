import { useEffect, useState } from 'react'
import { useFirestore } from 'react-redux-firebase'
import { useSelector } from 'react-redux'
import { useGetActualPricesQuery } from 'features/WishListApi/WishListApi'

export const useWishList = () => {
  const firestore = useFirestore()
  const [hasLoader, setLoader] = useState(true)
  const [isItemSwitching, setIsItemSwitching] = useState(false)
  const [error, setError] = useState(false)
  const wishList = useSelector((state) => state.firestore.ordered.wishList)
  const { data, isLoading } = useGetActualPricesQuery({ plains: wishList }, { skip: !wishList || wishList.length === 0 || !hasLoader })
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
      firestore.collection('wishList').doc(id).delete()
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
    findDuplicatedItemsByPlains,
    isItemSwitching,
    error,
  }
}
