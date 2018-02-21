import React from 'react';

import ArrowDown from './ArrowDown';
import ArrowUp from './ArrowUp';

const Label = ({ label, opened, onClick }) => (
  <div className="dropdown__label" onClick={onClick}>
    { label }
    { opened
      ? <ArrowUp />
      : <ArrowDown />
    }
  </div>
);

export default Label;
