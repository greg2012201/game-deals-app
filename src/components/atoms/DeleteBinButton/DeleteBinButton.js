import React from 'react';
import { ReactComponent as DeleteBin } from 'assets/icons/delete-bin.svg';
import { StyledButton, StyledTooltip } from './DeleteBinButton.style';
const DeleteBinButton = (props) => {
  return (
    <>
      <StyledButton {...props} data-tip="Remove all items from the WishList">
        <DeleteBin />
      </StyledButton>
      <StyledTooltip data-testid="tooltip" />
    </>
  );
};

export default DeleteBinButton;
