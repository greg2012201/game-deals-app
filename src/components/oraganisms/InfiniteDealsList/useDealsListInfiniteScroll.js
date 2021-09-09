import { useEffect, useState } from 'react';
import { useDealsListInfiniteScrollReducer } from './useDealsListInfiniteScrollReducer';

export const useDealsListInfiniteScroll = ({
  options: nextSortOptions,
  itemsPerLoad = 20,
  query,
}) => {
  const [currSortOptions, setCurrSortOptions] = useState(nextSortOptions);
  const {
    state: { listSize, hasInitialLoader, data },
    actionTypes: { loadMore, reset, setInitialLoader, setData, setError },
    dispatch,
  } = useDealsListInfiniteScrollReducer();
  const queryResult = query({
    listSize: listSize + itemsPerLoad,
    options: currSortOptions,
  });

  useEffect(() => {
    dispatch({ type: reset });
    setCurrSortOptions(nextSortOptions);
  }, [nextSortOptions, dispatch, reset, currSortOptions]);
  useEffect(() => {
    if (queryResult.isFetching) return;
    if (queryResult.data && queryResult.data.list.length > 0 && !queryResult.isFetching) {
      return dispatch({ type: setInitialLoader, payload: false });
    }
    return dispatch({ type: setInitialLoader, payload: true });
  }, [queryResult.isFetching, dispatch, setInitialLoader, queryResult.data]);

  useEffect(() => {
    if (queryResult.isError) {
      dispatch({ type: setError, payload: queryResult.isError });
    }
    if (queryResult.data) {
      dispatch({
        type: setData,
        payload: {
          list: queryResult.data.list,
          isLoading: queryResult.isFetching && hasInitialLoader,
          hasMoreItems: queryResult.data.list.length <= queryResult.data.count,
        },
      });
    }
  }, [
    queryResult.data,
    hasInitialLoader,
    queryResult.isFetching,
    queryResult.isLoading,
    queryResult.isError,
    dispatch,
    setData,
    setError,
  ]);

  const handleFetchMoreData = () => {
    if (queryResult.isLoading || queryResult.isFetching) return;
    dispatch({ type: setInitialLoader, payload: false });
    dispatch({ type: loadMore, incrementValue: itemsPerLoad });
  };
  return { handleFetchMoreData, data };
};
