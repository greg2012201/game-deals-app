import React from 'react'
import { ReactComponent as Icon } from 'assets/icons/magnifier-icon.svg'
import { HintWrapper, Wrapper } from './SearchBar.style'
import { useCombobox } from 'downshift'
import { states } from 'utils/state/states'
import Loader from 'react-loader-spinner'
import { useTheme } from 'styled-components'
import { useSearchBar } from './useSearchBar'
const SearchBar = () => {
  const theme = useTheme()

  const { handleItemToString, handleOnInputValueChange, compareFetchstate, compareSearchState, machingGames } = useSearchBar()
  const { isOpen, getMenuProps, getInputProps, getComboboxProps, getItemProps } = useCombobox({
    items: machingGames.results ? machingGames.results : [],
    onInputValueChange: handleOnInputValueChange,
    itemToString: handleItemToString,
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
            <Loader className="loader" type="Oval" color={theme.colors.darkWhite} height={20} width={20} />
          )
        ) : null}
      </HintWrapper>
    </Wrapper>
  )
}

export default SearchBar
