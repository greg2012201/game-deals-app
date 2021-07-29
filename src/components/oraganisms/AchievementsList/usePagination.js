import { useEffect, useState } from 'react'
import { RAWGOptions } from 'utils/fetchingOptions'
const { url, key } = RAWGOptions

export const usePagination = ({ pageSize, slug, fetchData, resetData, getCancelToken, listRef, fetch }) => {
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
  }, [slug])
  useEffect(() => {
    const cancelToken = getCancelToken()
    if (initialPage) {
      setCurrentPage(1)
      return resetData(cancelToken)
    }
    fetchData({
      url: `${url}/games/${slug}/achievements?page=${currentPage}&page_size=${pageSize}&key=${key}`,
      source: cancelToken,
    })

    return () => (!initialPage ? resetData(cancelToken) : null)
  }, [slug, currentPage, fetchData, initialPage, getCancelToken, resetData, pageSize, fetch])

  return { handleOnPageChange, currentPage }
}
