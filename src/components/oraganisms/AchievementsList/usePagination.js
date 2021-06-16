import { useEffect, useState } from 'react'
import { RAWGOptions } from 'utils/fetchingOptions'
const { url, key } = RAWGOptions

export const usePagination = ({ achievementsFor, fetchData, resetData, getCancelToken, listRef }) => {
  const [currentPage, setCurrentPage] = useState(1)
  const [initialPage, setInitialPage] = useState(true)
  const handleOnPageChange = (current) => {
    if (listRef.current === null || undefined) return
    listRef.current.scrollIntoView()
    return current !== currentPage ? setCurrentPage(current) : null
  }
  useEffect(() => {
    setInitialPage(false)
    setCurrentPage(1)
  }, [achievementsFor])
  useEffect(() => {
    const cancelToken = getCancelToken()
    if (initialPage) return
    fetchData(`${url}/games/${achievementsFor}/achievements?page=${currentPage}&key=${key}`, cancelToken)
    return () => (!initialPage ? resetData(cancelToken) : null)
  }, [achievementsFor, currentPage, fetchData, initialPage, getCancelToken, resetData])

  return { handleOnPageChange, currentPage }
}
