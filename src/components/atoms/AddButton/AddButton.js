import React from 'react'
import { StyledAddButton } from './AddButton.style'

const AddButton = (props) => {
  return <StyledAddButton {...props}>{props.isRemove ? 'Remove ' : 'Add to wish list'}</StyledAddButton>
}

export default AddButton
