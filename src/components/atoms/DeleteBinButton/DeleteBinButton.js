import React from 'react';
import { ReactComponent as DeleteBin } from 'assets/icons/delete-bin.svg';
import { StyledButton } from './DeleteBinButton.style';
import { usePopperTooltip } from 'react-popper-tooltip';
import Tooltip from '../Tooltip/Tooltip';
const DeleteBinButton = (props) => {
  const { getArrowProps, getTooltipProps, setTooltipRef, setTriggerRef, visible } = usePopperTooltip({ offset: [0, 10] });
  return (
    <>
      <StyledButton {...props} type="button" ref={setTriggerRef}>
        <DeleteBin />
      </StyledButton>
      <Tooltip popperProps={{ getArrowProps, getTooltipProps, setTooltipRef, visible }}>Remove all elements from the WishList</Tooltip>
    </>
  );
};

export default DeleteBinButton;
