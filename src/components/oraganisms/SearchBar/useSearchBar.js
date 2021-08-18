import { actions } from 'utils/state/transitions'
import { useState } from 'react'
import { useStateMachine } from 'hooks/useStateMachine'
import { useGetMachingGames } from './useGetMachingGames'
import { useHistory } from 'react-router-dom'
import { pathsList } from 'routes'
const { library, games } = pathsList

export const useSearchBar = () => {
  const history = useHistory()
  const [machingGames, setMachingGames] = useState({})
  const { updateState: updateSearchState, compareState: compareSearchState } = useStateMachine()
  const { getMachingGames, compareFetchstate, error } = useGetMachingGames(updateSearchState, setMachingGames)
  const handleItemToString = (item) => item && ''
  const handleOnSelectedItemChange = ({ selectedItem }) => {
    if (!selectedItem) return
    history.push(`${library}${games}/${selectedItem.slug}`)
  }
  const handleOnInputValueChange = ({ inputValue }) => {
    getMachingGames(inputValue)
    updateSearchState(actions.initialize)
  }
  return { handleItemToString, handleOnInputValueChange, handleOnSelectedItemChange, compareFetchstate, compareSearchState, machingGames, error }
}
