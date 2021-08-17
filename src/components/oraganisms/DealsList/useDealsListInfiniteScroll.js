import { useEffect } from 'react'
import { useDealsListInfiniteScrollReducer } from './useDealsListInfiniteScrollReducer'
const initialState = {
  listSize: 0,
  hasInitialLoader: true,
  data: { list: [], isLoading: true, isLoadingMore: false, hasMoreItems: true, currency: '', isError: false },
}
export const useDealsListInfiniteScroll = ({ options, pageSize = 20, query }) => {
  const {
    state: { listSize, hasInitialLoader, data },
    actionTypes: { incrementListSize, resetListSize, setInitialLoader, setData, setError },
    dispatch,
  } = useDealsListInfiniteScrollReducer({ initialState })
  const queryResult = query({ listSize: listSize + pageSize, options }, { skip: hasInitialLoader && listSize >= 20 })
  useEffect(() => {
    if (queryResult.isFetching) return
    return dispatch({ type: setInitialLoader, payload: true })
  }, [queryResult.isFetching, dispatch, setInitialLoader])

  useEffect(() => {
    return dispatch({ type: resetListSize })
  }, [options, dispatch, resetListSize])
  useEffect(() => {
    if (queryResult.isError) {
      dispatch({ type: setError, payload: queryResult.isError })
    }
    if (queryResult.data) {
      dispatch({
        type: setData,
        payload: {
          list: queryResult.data.list,
          isLoading: queryResult.isFetching && hasInitialLoader,
          isLoadingMore: !queryResult.isFetching,
          hasMoreItems: !queryResult.isLoading && queryResult.data.list.length <= queryResult.data.count,
          currency: queryResult.data.currency,
        },
      })
    }
  }, [queryResult.data, hasInitialLoader, queryResult.isFetching, queryResult.isLoading, queryResult.isError, dispatch, setData, setError])

  const handleFetchMoreData = () => {
    if (queryResult.isLoading || queryResult.isFetching) return
    dispatch({ type: incrementListSize, payload: pageSize })
    dispatch({ type: setInitialLoader, payload: false })
  }

  return { handleFetchMoreData, data }
}
