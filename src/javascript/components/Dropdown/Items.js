import React from 'react';
import PropTypes from 'prop-types';
import { dummyClick } from '../../utilities';

import Item from './Item';

const Items = ({
  entries, onItemClick, opened, selectedEntries
}) => (
  opened &&
  <ul className={`dropdown__items ${opened && 'dropdown__items--opened'}`}>
    {
      entries.map(entry => (
        <Item
          key={entry.name}
          onItemClick={onItemClick}
          selected={selectedEntries.includes(entry.name)}
          {...entry}
        />
      ))
    }
  </ul>
);

Items.propTypes = {
  entries: PropTypes.arrayOf(PropTypes.object),
  onItemClick: PropTypes.func,
  opened: PropTypes.bool,
  selectedEntries: PropTypes.arrayOf(PropTypes.string)
};

Items.defaultProps = {
  entries: [{ name: 'aaa' }, { name: 'bbb' }, { name: 'ccc' }],
  onItemClick: dummyClick,
  opened: false,
  selectedEntries: ['bbb']
};

export default Items;
