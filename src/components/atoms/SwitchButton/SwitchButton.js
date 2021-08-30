import React from 'react';
import { StyledAddButton } from './SwitchButton.style';

const SwitchButton = (props) => {
  return <StyledAddButton {...props}>{props.isRemove ? 'Remove ' : 'Add to wish list'}</StyledAddButton>;
};

export default SwitchButton;
