import { actions } from 'utils/state/transitions'
import { useState } from 'react'
import { useStateMachine } from 'hooks/useStateMachine'
import { useGetMachingGames } from './useGetMachingGames'
export const useSearchBar = () => {
  const [machingGames, setMachingGames] = useState({})
  const { updateState, compareState: compareSearchState } = useStateMachine()
  const { getMachingGames, compareFetchstate } = useGetMachingGames(updateState, setMachingGames)
  const handleItemToString = (item) => item && ''
  const handleOnInputValueChange = ({ inputValue }) => {
    getMachingGames(inputValue)
    updateState(actions.fetch)
  }
  return { handleItemToString, handleOnInputValueChange, compareFetchstate, compareSearchState, machingGames }
}
