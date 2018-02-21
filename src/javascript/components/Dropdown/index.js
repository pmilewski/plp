import React from 'react';

import Items from './Items';
import Label from './Label';
import { dummyClick } from '../../utilities';

const Dropdown = ({
  label, entries, onItemClick, onLabelClick, opened, selectedEntries
}) => (
  <div className="dropdown">
    <Label label={label} onClick={onLabelClick} opened={opened} />
    <Items entries={entries} onItemClick={onItemClick} opened={opened} selectedEntries={selectedEntries} />
  </div>
);

Dropdown.defaultProps = {
  label: 'label...',
  entries: [{ name: 'aaa' }, { name: 'bbb' }, { name: 'ccc' }],
  selectedEntries: ['bbb'],
  onLabelClick: dummyClick,
  opened: false
};

export default Dropdown;
