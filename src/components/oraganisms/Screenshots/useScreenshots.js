import axios from 'axios';
import { useCallback, useState } from 'react';
import { actions } from 'utils/state/transitions';
const fetchingCancelMessage = 'cancel';
const initialState = [];
export const useScreenshots = () => {
  const [data, setData] = useState(initialState);
  const [error, setError] = useState('');

  const fetchData = useCallback(async ({ url, source = null, updateState }) => {
    updateState(actions.initialize);
    try {
      const { data } = await axios.get(
        url,
        source
          ? {
              cancelToken: source.token,
            }
          : null
      );
      setData(data.results);
      updateState(actions.success);
    } catch (e) {
      if (e.message === fetchingCancelMessage) return;
      setError('Something went wrong');
      updateState(actions.error);
      throw Error(e);
    }
  }, []);
  const getCancelToken = useCallback(() => {
    return axios.CancelToken.source();
  }, []);
  const resetData = useCallback((source) => {
    source.cancel(fetchingCancelMessage);
    setData(initialState);
  }, []);

  return { error, data, fetchData, getCancelToken, resetData };
};
