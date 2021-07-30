import React, { useState, useMemo } from 'react'
import { ReactComponent as Icon } from 'assets/icons/magnifier-icon.svg'
import { HintWrapper, Wrapper } from './SearchBar.style'
import { useFetchData } from 'hooks/useFetchData'
import { RAWGOptions } from 'utils/fetchingOptions'
import debounce from 'lodash.debounce'
import { useCombobox } from 'downshift'
import { useStateMachine } from 'hooks/useStateMachine'
import { actions } from 'utils/state/transitions'
import { states } from 'utils/state/states'

const { url, key } = RAWGOptions
const SearchBar = () => {
  const [machingGames, setMachingGames] = useState({})
  const { fetchData, compareState: compareFetchstate } = useFetchData(setMachingGames)
  const { updateState, compareState: compareSearchState } = useStateMachine()
  const handleItemToString = (item) => item && ''
  const getMachingGames = useMemo(() => {
    updateState(actions.fetch)
    return debounce(({ inputValue }) => {
      fetchData({ url: `${url}/games?search=303%20${inputValue}&key=${key}` })
      updateState(actions.success)
    }, 200)
  }, [fetchData, updateState])

  const { isOpen, getMenuProps, getInputProps, getComboboxProps, getItemProps } = useCombobox({
    items: machingGames.results ? machingGames.results : [],
    onInputValueChange: getMachingGames,
    itemToString: handleItemToString,
    onStateChange: () => updateState(actions.fetch),
  })

  return (
    <Wrapper {...getComboboxProps()}>
      <label htmlFor="search">
        <Icon />
      </label>
      <input {...getInputProps()} id="search" name="search" placeholder="Szukaj..." />
      <HintWrapper isVisible={isOpen} {...getMenuProps()}>
        {isOpen ? (
          compareSearchState(states.hasLoaded) && compareFetchstate(states.hasLoaded) ? (
            machingGames.results &&
            machingGames.results.map(({ name, id }, index) => {
              return (
                <li {...getItemProps({ item: '', index })} key={id}>
                  {name}
                </li>
              )
            })
          ) : (
            <div>loading</div>
          )
        ) : null}
      </HintWrapper>
    </Wrapper>
  )
}

export default SearchBar
