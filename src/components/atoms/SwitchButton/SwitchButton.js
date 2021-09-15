import React from 'react';
import { usePopperTooltip } from 'react-popper-tooltip';
import Tooltip from '../Tooltip/Tooltip';
import { StyledAddButton } from './SwitchButton.style';

const SwitchButton = (props) => {
  const {
    getArrowProps,
    getTooltipProps,
    setTriggerRef,
    setTooltipRef,
    visible,
  } = usePopperTooltip({ placement: 'top', offset: [0, 10] });
  return (
    <StyledAddButton ref={setTriggerRef} {...props}>
      <Tooltip popperProps={{ getTooltipProps, getArrowProps, setTooltipRef, visible }}>
        {props.isRemove ? 'Delete' : 'Add'}
      </Tooltip>
    </StyledAddButton>
  );
};

export default SwitchButton;
