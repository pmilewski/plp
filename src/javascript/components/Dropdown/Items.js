import React from 'react';

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

export default Items;
