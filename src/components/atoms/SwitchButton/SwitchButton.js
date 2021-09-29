import React from 'react';
import { usePopperTooltip } from 'react-popper-tooltip';
import Tooltip from '../Tooltip/Tooltip';
import { StyledSwitchButton } from './SwitchButton.style';

const SwitchButton = (props) => {
  const {
    getArrowProps,
    getTooltipProps,
    setTriggerRef,
    setTooltipRef,
    visible,
  } = usePopperTooltip({ placement: 'top', offset: [0, 10], delayShow: 500 });
  return (
    <StyledSwitchButton isAuthenticated={props.isAuthenticated} ref={setTriggerRef} {...props}>
      <Tooltip popperProps={{ getTooltipProps, getArrowProps, setTooltipRef, visible }}>
        {!props.isAuthenticated ? 'Login' : props.isRemove ? 'Delete' : 'Add'}
      </Tooltip>
    </StyledSwitchButton>
  );
};

export default SwitchButton;
