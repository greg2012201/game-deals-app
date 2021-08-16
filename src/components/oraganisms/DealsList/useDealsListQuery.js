import { useGetDealsListQuery } from 'features/DealsApi/DealsApi'
import { useEffect, useMemo, useState } from 'react'

export const useDealsListQuery = ({ options, pageSize = 20 }) => {
  const [listSize, setListSize] = useState(0)
  const [hasInitialLoader, setInitialLoader] = useState(true)

  const lastResult = useGetDealsListQuery({ listSize: listSize - pageSize, options }, { skip: listSize === 0 || hasInitialLoader })
  const currentResult = useGetDealsListQuery({ listSize, options }, { skip: listSize >= 20 })
  const nextResult = useGetDealsListQuery({ listSize: listSize + pageSize, options }, { skip: hasInitialLoader && listSize >= 20 })

  useEffect(() => {
    if (currentResult.isFetching || nextResult.isFetching) return
    setInitialLoader(true)
  }, [currentResult.isFetching, nextResult.isFetching])

  useEffect(() => {
    return setListSize(0)
  }, [options])
  const data = useMemo(() => {
    const arr = new Array(1 * (listSize + pageSize))
    for (const data of [lastResult.data, currentResult.data, nextResult.data]) {
      if (data) {
        arr.splice(pageSize, data.list.length, ...data.list)
      }
    }

    return {
      list: arr,
      isLoading: currentResult.isFetching || (nextResult.isFetching && hasInitialLoader),
      isLoadingMore: !currentResult.isFetching && !currentResult.isLoading,
      hasMoreItems: !currentResult.isLoading && arr.length <= currentResult.data.count,
      currency: currentResult.data && currentResult.data.currency,
    }
  }, [
    listSize,
    lastResult.data,
    currentResult.data,
    nextResult.data,
    pageSize,
    hasInitialLoader,
    nextResult.isFetching,
    currentResult.isFetching,
    currentResult.isLoading,
  ])

  const handleFetchMoreData = () => {
    if (nextResult.isLoading || nextResult.isFetching) return

    setListSize((state) => (state += 20))
    setInitialLoader(false)
  }
  return { handleFetchMoreData, data }
}
