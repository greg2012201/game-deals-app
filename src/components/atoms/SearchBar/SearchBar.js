import React from 'react'
import { ReactComponent as Icon } from './../../../assets/icons/magnifier-icon.svg'
import { Wrapper } from './SearchBar.style'
const SearchBar = () => {
  return (
    <Wrapper>
      <label for="search">
        <Icon />
      </label>
      <input id="search" name="search" placeholder="Szukaj..." />
    </Wrapper>
  )
}

export default SearchBar
