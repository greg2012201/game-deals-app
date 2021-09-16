import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './MenuButton.style';
import { Triangle } from 'components/Triangle/Triangle';

export const MenuButton = (props) => {
  return (
    <Wrapper {...props} {...props.accesibleProps}>
      <h1>Game-Deals</h1>
      <Triangle toggle={props.toggle} />
    </Wrapper>
  );
};

MenuButton.propTypes = {
  toggle: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
  onClick: PropTypes.func,
};

export default MenuButton;
