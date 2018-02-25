import React from 'react';
import { dummyClick } from '../../utilities';

import Items from './Items';
import Item from './Item';


describe('proper component mount', () => {
  it('looks as expected with default props ', () => {
    const wrapper = mount(<Items />);
    expect(wrapper.find(Item)).toHaveLength(0);
    expect(wrapper.prop('entries')).toEqual([{ name: 'aaa' }, { name: 'bbb' }, { name: 'ccc' }]);
    expect(wrapper.prop('onItemClick')).toBe(dummyClick);
    expect(wrapper.prop('opened')).toBe(false);
    expect(wrapper.prop('selectedEntries')).toEqual(['bbb']);
  });

  it('looks as expected with another props ', () => {
    const props = {
      entries: [{ name: 'name1' }, { name: 'name2' }, { name: 'name3' }, { name: 'name4' }],
      opened: true,
      selectedEntries: ['name2', 'name4']
    };
    const wrapper = mount(<Items {...props} />);
    expect(wrapper.find(Item)).toHaveLength(4);
    expect(wrapper.prop('entries')).toEqual(props.entries);
    expect(wrapper.prop('onItemClick')).toBe(dummyClick);
    expect(wrapper.prop('opened')).toBe(props.opened);
    expect(wrapper.prop('selectedEntries')).toEqual(props.selectedEntries);
  });

  it('should not wrap content in a ul tag when closed', () => {
    const wrapper = shallow(<Items />);
    expect(wrapper.hasClass('dropdown__items')).toBe(false);
    expect(wrapper.hasClass('dropdown__items--opened')).toBe(false);
    expect(wrapper.is('ul')).toBe(false);
  });

  it('should wrap content in a ul tag when opened', () => {
    const wrapper = shallow(<Items opened={true} />);
    expect(wrapper.hasClass('dropdown__items')).toBe(true);
    expect(wrapper.hasClass('dropdown__items--opened')).toBe(true);
    expect(wrapper.is('ul')).toBe(true);
  });
});
