import { actions } from 'utils/state/transitions'
import { useState } from 'react'
import { useStateMachine } from 'hooks/useStateMachine'
import { useGetMachingGames } from './useGetMachingGames'
export const useSearchBar = () => {
  const [machingGames, setMachingGames] = useState({})
  const { updateState: updateSearchState, compareState: compareSearchState } = useStateMachine()
  const { getMachingGames, compareFetchstate, error } = useGetMachingGames(updateSearchState, setMachingGames)
  const handleItemToString = (item) => item && ''
  const handleOnInputValueChange = ({ inputValue }) => {
    getMachingGames(inputValue)
    updateSearchState(actions.fetch)
  }
  return { handleItemToString, handleOnInputValueChange, compareFetchstate, compareSearchState, machingGames, error }
}
