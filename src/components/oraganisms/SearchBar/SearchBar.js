import React from 'react';
import { ReactComponent as Icon } from 'assets/icons/magnifier-icon.svg';
import {
  Hint,
  HintWrapper,
  StyledLoader,
  StyledResetRoundButton,
  Wrapper,
} from './SearchBar.style';
import { useCombobox } from 'downshift';
import { states } from 'utils/state/states';
import { useTheme } from 'styled-components';
import { useSearchBar } from './useSearchBar';
import Title from 'components/atoms/Title/Title';
import ErrorMessage from 'components/atoms/ErrorMessage/ErrorMessage';
import { Input } from 'components/atoms/Input/Input';
const SearchBar = () => {
  const theme = useTheme();

  const {
    handleItemToString,
    handleOnInputValueChange,
    handleOnSelectedItemChange,
    compareFetchstate,
    compareSearchState,
    machingGames,
    error,
  } = useSearchBar();

  const {
    isOpen,
    openMenu,
    inputValue,
    getMenuProps,
    getInputProps,
    getComboboxProps,
    getItemProps,
    reset,
    highlightedIndex,
  } = useCombobox({
    items: machingGames.results ? machingGames.results : [],
    onInputValueChange: handleOnInputValueChange,
    itemToString: handleItemToString,
    onSelectedItemChange: handleOnSelectedItemChange,
  });
  return (
    <Wrapper {...getComboboxProps()}>
      {' '}
      <label htmlFor="search">
        <Icon />
      </label>
      <Input
        {...getInputProps()}
        id="search"
        name="search"
        placeholder="Search for game details..."
        onClick={openMenu}
      />
      <StyledResetRoundButton isReset isVisible={inputValue} onClick={() => reset()} />
      {!compareFetchstate(states.hasError) ? (
        <HintWrapper
          isEmpty={!machingGames.results && !compareFetchstate(states.isLoading)}
          isVisible={isOpen}
          {...getMenuProps()}
        >
          {isOpen ? (
            compareSearchState(states.hasLoaded) && compareFetchstate(states.hasLoaded) ? (
              machingGames.results &&
              machingGames.results.map(({ name, id, background_image }, index) => {
                return (
                  <Hint
                    {...getItemProps({
                      item: '',
                      index,
                    })}
                    isHighlited={highlightedIndex === index}
                    key={id}
                  >
                    <img src={background_image} alt={name} />
                    <Title titleType="h4">{name}</Title>
                  </Hint>
                );
              })
            ) : (
              <StyledLoader
                className="loader"
                type="Oval"
                color={theme.colors.darkWhite}
                height={40}
                width={40}
              />
            )
          ) : null}
        </HintWrapper>
      ) : (
        <HintWrapper {...getMenuProps()} isVisible={isOpen}>
          {isOpen && <ErrorMessage>{error}</ErrorMessage>}
        </HintWrapper>
      )}
    </Wrapper>
  );
};

export default SearchBar;
