import {
  resetOnSortOptionChange,
  setCurrSortOptions,
  setInitialLoader,
  setData,
  loadMore,
  resetOnUnmount,
  setError,
} from 'features/DealsInfiniteScrollSlice/DealsInfiniteScrollSlice';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

export const useDealsListInfiniteScroll = ({ itemsPerLoad = 20, query }) => {
  const dispatch = useDispatch();
  const {
    listSize,
    currSortOptions,
    nextSortOptions,
    hasInitialLoader,
    data,
    isSortOptionLoading,
  } = useSelector((state) => state.dealsInfiniteScroll);

  const queryResult = query(
    {
      listSize: listSize + itemsPerLoad,
      options: currSortOptions,
    },
    { skip: isSortOptionLoading }
  );
  useEffect(() => {
    return () => dispatch(resetOnUnmount());
  }, [dispatch]);
  useEffect(() => {
    dispatch(setCurrSortOptions(nextSortOptions));
    dispatch(resetOnSortOptionChange());
  }, [nextSortOptions, dispatch, currSortOptions]);
  useEffect(() => {
    if (queryResult.data && queryResult.data.list.length > 0 && !queryResult.isFetching) {
      return dispatch(setInitialLoader(false));
    }
  }, [queryResult.isFetching, dispatch, queryResult.data]);

  useEffect(() => {
    if (queryResult.isError) {
      dispatch(setError(queryResult.error));
    }
    if (queryResult.data) {
      dispatch(
        setData({
          list: queryResult.data.list,
          isLoading: queryResult.isFetching && hasInitialLoader,
          hasMoreItems: queryResult.data.list.length <= queryResult.data.count,
        })
      );
    }
  }, [
    queryResult.error,
    queryResult.data,
    hasInitialLoader,
    queryResult.isFetching,
    queryResult.isLoading,
    queryResult.isError,
    dispatch,
  ]);

  const handleFetchMoreData = () => {
    if (queryResult.isLoading || queryResult.isFetching) return;
    dispatch(setInitialLoader(false));
    dispatch(loadMore(itemsPerLoad));
  };
  return { handleFetchMoreData, data };
};
