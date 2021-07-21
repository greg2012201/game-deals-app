import { useEffect, useState } from 'react'
import { RAWGOptions } from 'utils/fetchingOptions'
const { url, key } = RAWGOptions

export const usePagination = ({ pageSize, achievementsFor, fetchData, resetData, getCancelToken, listRef, updateState }) => {
  const [currentPage, setCurrentPage] = useState(1)
  const [initialPage, setInitialPage] = useState(true)
  const handleOnPageChange = (current) => {
    if (listRef.current === null || undefined) return
    return current !== currentPage ? setCurrentPage(current) : null
  }
  useEffect(() => {
    setInitialPage(false)
    setCurrentPage(1)
    return () => {
      setCurrentPage(1)
      setInitialPage(true)
    }
  }, [achievementsFor])
  useEffect(() => {
    const cancelToken = getCancelToken()
    if (initialPage) {
      setCurrentPage(1)
      return resetData(cancelToken)
    }
    fetchData({
      url: `${url}/games/${achievementsFor}/achievements?page=${currentPage}&page_size=${pageSize}&key=${key}`,
      source: cancelToken,
      updateState,
    })
    return () => (!initialPage ? resetData(cancelToken) : null)
  }, [achievementsFor, currentPage, fetchData, initialPage, getCancelToken, resetData, pageSize, updateState])

  return { handleOnPageChange, currentPage }
}
