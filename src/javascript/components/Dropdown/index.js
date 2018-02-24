import React from 'react';
import PropTypes from 'prop-types';
import { dummyClick } from '../../utilities';

import Items from './Items';
import Label from './Label';

const Dropdown = ({
  entries, label, onItemClick, onLabelClick, opened, selectedEntries
}) => (
  <div className="dropdown">
    <Label label={label} onClick={onLabelClick} opened={opened} />
    <Items entries={entries} onItemClick={onItemClick} opened={opened} selectedEntries={selectedEntries} />
  </div>
);

Dropdown.propTypes = {
  entries: PropTypes.arrayOf(PropTypes.object),
  label: PropTypes.string,
  onItemClick: PropTypes.func,
  onLabelClick: PropTypes.func,
  opened: PropTypes.bool,
  selectedEntries: PropTypes.arrayOf(PropTypes.string)
};

Dropdown.defaultProps = {
  entries: [{ name: 'aaa' }, { name: 'bbb' }, { name: 'ccc' }],
  label: 'label...',
  onItemClick: dummyClick,
  onLabelClick: dummyClick,
  opened: false,
  selectedEntries: ['bbb']
};

export default Dropdown;
