import React from 'react';
import { dummyClick } from '../../utilities';

import ArrowDown from './ArrowDown';
import ArrowUp from './ArrowUp';
import Label from './Label';


describe('proper component mount', () => {
  it('looks as expected width default ', () => {
    const wrapper = mount(<Label />);
    expect(wrapper.find(ArrowDown)).toHaveLength(1);
    expect(wrapper.find(ArrowUp)).toHaveLength(0);
    expect(wrapper.prop('label')).toBe('EN label');
    expect(wrapper.prop('opened')).toBe(false);
    expect(wrapper.prop('onClick')).toBe(dummyClick);
  });

  it('looks as expected width another props ', () => {
    const props = { label: 'LaBeL!', opened: true };
    const wrapper = mount(<Label {...props} />);
    expect(wrapper.find(ArrowDown)).toHaveLength(0);
    expect(wrapper.find(ArrowUp)).toHaveLength(1);
    expect(wrapper.prop('label')).toBe(props.label);
    expect(wrapper.prop('opened')).toBe(props.opened);
    expect(wrapper.prop('onClick')).toBe(dummyClick);
  });

  it('should wrap content in a span tag', () => {
    const wrapper = shallow(<Label />);
    expect(wrapper.is('div')).toBe(true);
    expect(wrapper.hasClass('dropdown__label')).toBe(true);
  });
});
