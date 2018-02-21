import React from 'react';

import Categories from './Categories';
import Colors from './Colors';
import Label from './Label';
import Selections from './Selections';

const Filters = () => (
  <div className="filters">
    <Label />
    <Categories />
    <Colors />
    <Selections />
  </div>
);

export default Filters;
