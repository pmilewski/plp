import React from 'react';
import { dummyClick } from '../../utilities';

import Dropdown from './index';
import Items from './Items';
import Label from './Label';


describe('proper component mount', () => {
  it('looks as expected with default props ', () => {
    const wrapper = mount(<Dropdown />);
    expect(wrapper.find(Label)).toHaveLength(1);
    expect(wrapper.find(Items)).toHaveLength(1);
    expect(wrapper.prop('entries')).toEqual([{ name: 'aaa' }, { name: 'bbb' }, { name: 'ccc' }]);
    expect(wrapper.prop('label')).toBe('label...');
    expect(wrapper.prop('onItemClick')).toBe(dummyClick);
    expect(wrapper.prop('onLabelClick')).toBe(dummyClick);
    expect(wrapper.prop('opened')).toBe(false);
    expect(wrapper.prop('selectedEntries')).toEqual(['bbb']);
  });

  it('looks as expected with another props ', () => {
    const props = {
      entries: [{ name: 'name1' }, { name: 'name2' }, { name: 'name3' }],
      label: 'Dropdown LaBeL',
      opened: true,
      selectedEntries: ['name2', 'name3']
    };
    const wrapper = mount(<Dropdown {...props} />);
    expect(wrapper.find(Label)).toHaveLength(1);
    expect(wrapper.find(Items)).toHaveLength(1);
    expect(wrapper.prop('entries')).toEqual(props.entries);
    expect(wrapper.prop('label')).toBe(props.label);
    expect(wrapper.prop('onItemClick')).toBe(dummyClick);
    expect(wrapper.prop('onLabelClick')).toBe(dummyClick);
    expect(wrapper.prop('opened')).toBe(props.opened);
    expect(wrapper.prop('selectedEntries')).toEqual(props.selectedEntries);
  });

  it('should wrap content in a span tag', () => {
    const wrapper = shallow(<Dropdown />);
    expect(wrapper.is('div')).toBe(true);
    expect(wrapper.hasClass('dropdown')).toBe(true);
  });
});
