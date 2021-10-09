import { useEffect } from 'react';
import { useInfiniteGamesListReducer } from './useInfiniteGamesListReducer';

export const useInfiniteGamesListQuery = ({ query, endpoint }) => {
  const {
    state: { data, page, isEmpty, isLoading, hasError, limit, hasNextPage },
    actions: { setData, loadMore, init, resetOnUnmount, setMetaData, setError },
    dispatch,
  } = useInfiniteGamesListReducer();
  const result = query(
    {
      page,
      endpoint,
    },
    { skip: !hasNextPage && !isEmpty }
  );
  useEffect(() => {
    return () => dispatch({ type: resetOnUnmount });
  }, [endpoint, resetOnUnmount, dispatch]);
  useEffect(() => {
    dispatch({ type: init });
  }, [dispatch, init, endpoint]);
  useEffect(() => {
    if (result.isError) {
      dispatch({ type: setError });
    }
  }, [result.isError, setError, dispatch]);
  useEffect(() => {
    if (result.data) {
      dispatch({
        type: setData,
        payload: result.data.results,
      });
      dispatch({
        type: setMetaData,
        payload: { limit: result.data.count, hasNextPage: !!result.data.next },
      });
    }
  }, [dispatch, setData, setError, result.data, setMetaData, result.isError]);

  const handleFetchMoreData = () => {
    if (result.isLoading || result.isFetching) return;
    dispatch({ type: loadMore });
  };
  return { handleFetchMoreData, data, isEmpty, isLoading, hasError, limit, hasNextPage };
};
