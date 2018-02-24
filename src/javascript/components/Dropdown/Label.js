import React from 'react';
import PropTypes from 'prop-types';

import ArrowDown from './ArrowDown';
import ArrowUp from './ArrowUp';
import { dummyClick } from '../../utilities';

const Label = ({ label, opened, onClick }) => (
  <div className="dropdown__label" onClick={onClick}>
    { label }
    { opened
      ? <ArrowUp />
      : <ArrowDown />
    }
  </div>
);

Label.propTypes = {
  label: PropTypes.string,
  opened: PropTypes.bool,
  onClick: PropTypes.func
};

Label.defaultProps = {
  label: 'EN label',
  opened: false,
  onClick: dummyClick
};

export default Label;
