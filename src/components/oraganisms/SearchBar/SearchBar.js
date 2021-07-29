import React from 'react'
import { ReactComponent as Icon } from 'assets/icons/magnifier-icon.svg'
import { HintWrapper, Wrapper } from './SearchBar.style'

const SearchBar = () => {
  return (
    <Wrapper>
      <label htmlFor="search">
        <Icon />
      </label>
      <input id="search" name="search" placeholder="Szukaj..." />
      <HintWrapper></HintWrapper>
    </Wrapper>
  )
}

export default SearchBar
