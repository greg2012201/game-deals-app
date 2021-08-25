import React from 'react'
import Loader from 'react-loader-spinner'
import { StyledAddButton } from './SwitchButton.style'

const SwitchButton = (props) => {
  return (
    <StyledAddButton {...props}>
      {props.isLoading ? <Loader type="Oval" height={25} width={25} /> : props.isRemove ? 'Remove ' : 'Add to wish list'}
    </StyledAddButton>
  )
}

export default SwitchButton
