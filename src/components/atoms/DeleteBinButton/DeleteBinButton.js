import React from 'react';
import { ReactComponent as DeleteBin } from 'assets/icons/delete-bin.svg';
import { StyledButton } from './DeleteBinButton.style';
const DeleteBinButton = (props) => {
  return (
    <StyledButton {...props}>
      <DeleteBin />
    </StyledButton>
  );
};

export default DeleteBinButton;
