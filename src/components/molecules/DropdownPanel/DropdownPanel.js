import React from 'react'
import { Link } from 'react-router-dom'
import SearchBar from '../../atoms/SearchBar/SearchBar'
import { Wrapper } from './DropdownPanel.style'

const DropdownPanel = React.forwardRef((props, ref) => {
  return (
    <Wrapper ref={ref} {...props}>
      <Link to="/home">
        <h2 ref={ref}>Home</h2>
      </Link>
      <SearchBar />
    </Wrapper>
  )
})

export default DropdownPanel
