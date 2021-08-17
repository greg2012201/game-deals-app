import { useEffect, useState } from 'react'
const initialState = { list: [], isLoading: true, isLoadingMore: false, hasMoreItems: true, currency: '', isError: false }
export const useDealsListInfiniteScroll = ({ options, pageSize = 20, query }) => {
  const [listSize, setListSize] = useState(0)
  const [hasInitialLoader, setInitialLoader] = useState(true)
  const [data, setData] = useState(initialState)
  const queryResult = query({ listSize: listSize + pageSize, options }, { skip: hasInitialLoader && listSize >= 20 })
  useEffect(() => {
    if (queryResult.isFetching) return
    setInitialLoader(true)
  }, [queryResult.isFetching])

  useEffect(() => {
    return setListSize(0)
  }, [options])
  useEffect(() => {
    if (queryResult.isError) {
      return setData({
        ...initialState,
        isError: queryResult.isError,
      })
    }

    return (
      queryResult.data &&
      setData({
        list: queryResult.data.list,
        isLoading: queryResult.isFetching && hasInitialLoader,
        isLoadingMore: !queryResult.isFetching,
        hasMoreItems: !queryResult.isLoading && queryResult.data.list.length <= queryResult.data.count,
        currency: queryResult.data.currency,
      })
    )
  }, [queryResult.data, hasInitialLoader, queryResult.isFetching, queryResult.isLoading, queryResult.isError])

  const handleFetchMoreData = () => {
    if (queryResult.isLoading || queryResult.isFetching) return

    setListSize((state) => (state += 20))
    setInitialLoader(false)
  }
  return { handleFetchMoreData, data }
}
