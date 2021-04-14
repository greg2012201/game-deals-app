import React from 'react'
import SearchBar from '../../atoms/SearchBar/SearchBar'
import { Wrapper } from './DropdownPanel.style'

const DropdownPanel = React.forwardRef((props, ref) => {
  return (
    <Wrapper ref={ref} {...props}>
      <SearchBar />
    </Wrapper>
  )
})

export default DropdownPanel
