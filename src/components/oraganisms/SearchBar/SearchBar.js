import React from 'react'
import { ReactComponent as Icon } from 'assets/icons/magnifier-icon.svg'
import { Hint, HintWrapper, StyledLoader, StyledResetRoundButton, Wrapper } from './SearchBar.style'
import { useCombobox } from 'downshift'
import { states } from 'utils/state/states'
import { useTheme } from 'styled-components'
import { useSearchBar } from './useSearchBar'
import { Link } from 'react-router-dom'
import Title from 'components/atoms/Title/Title'
import { pathsList } from 'routes'
import ErrorMessage from 'components/atoms/ErrorMessage/ErrorMessage'
const { library, games } = pathsList
const SearchBar = () => {
  const theme = useTheme()

  const { handleItemToString, handleOnInputValueChange, compareFetchstate, compareSearchState, machingGames, error } = useSearchBar()
  const { isOpen, inputValue, getMenuProps, getInputProps, getComboboxProps, getItemProps, reset } = useCombobox({
    items: machingGames.results ? machingGames.results : [],
    onInputValueChange: handleOnInputValueChange,
    itemToString: handleItemToString,
  })
  return (
    <Wrapper {...getComboboxProps()}>
      <label htmlFor="search">
        <Icon />
      </label>
      <input {...getInputProps()} id="search" name="search" placeholder="Search for game details..." />
      <StyledResetRoundButton isReset isVisible={inputValue} onClick={() => reset()} />

      {!compareFetchstate(states.hasError) ? (
        <HintWrapper isVisible={isOpen} {...getMenuProps()}>
          {isOpen ? (
            compareSearchState(states.hasLoaded) && compareFetchstate(states.hasLoaded) ? (
              machingGames.results &&
              machingGames.results.map(({ name, id, slug, background_image }, index) => {
                return (
                  <Link {...getItemProps({ item: '', index })} key={id} to={`${library}${games}/${slug}`}>
                    <Hint key={id}>
                      <img src={background_image} alt={name} />
                      <Title titleType="h4">{name}</Title>
                    </Hint>
                  </Link>
                )
              })
            ) : (
              <StyledLoader className="loader" type="Oval" color={theme.colors.darkWhite} height={40} width={40} />
            )
          ) : null}
        </HintWrapper>
      ) : (
        <HintWrapper {...getMenuProps()} isVisible={isOpen}>
          {isOpen && <ErrorMessage>{error}</ErrorMessage>}
        </HintWrapper>
      )}
    </Wrapper>
  )
}

export default SearchBar
