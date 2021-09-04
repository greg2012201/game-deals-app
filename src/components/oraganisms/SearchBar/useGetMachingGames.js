import { useFetchData } from 'hooks/useFetchData';
import debounce from 'lodash.debounce';
import { useMemo } from 'react';
import { RAWGOptions } from 'utils/fetchingOptions';
import { actions } from 'utils/state/transitions';
const { url, key } = RAWGOptions;

export const useGetMachingGames = (updateSearchState, setMachingGames) => {
  const { fetchData, compareState: compareFetchstate, error } = useFetchData(setMachingGames);
  const getMachingGames = useMemo(() => {
    updateSearchState(actions.initialize);
    return debounce((inputValue) => {
      fetchData({ url: `${url}/games?search=303%20${inputValue}&key=${key}` });
      updateSearchState(actions.success);
    }, 200);
  }, [fetchData, updateSearchState]);

  return { getMachingGames, compareFetchstate, error };
};
