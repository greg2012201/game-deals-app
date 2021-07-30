import { useFetchData } from 'hooks/useFetchData'
import debounce from 'lodash.debounce'
import { useMemo } from 'react'
import { RAWGOptions } from 'utils/fetchingOptions'
import { actions } from 'utils/state/transitions'
const { url, key } = RAWGOptions

export const useGetMachingGames = (updateState, setMachingGames) => {
  const { fetchData, compareState: compareFetchstate } = useFetchData(setMachingGames)
  const getMachingGames = useMemo(() => {
    updateState(actions.fetch)
    return debounce((inputValue) => {
      fetchData({ url: `${url}/games?search=303%20${inputValue}&key=${key}` })
      updateState(actions.success)
    }, 200)
  }, [fetchData, updateState])

  return { getMachingGames, compareFetchstate }
}
