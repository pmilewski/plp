import React from 'react';
import { dummyClick } from '../../utilities';

import Item from './Item';


describe('proper component mount', () => {
  it('looks as expected width default ', () => {
    const wrapper = mount(<Item />);
    expect(wrapper.prop('code')).toEqual('EN code');
    expect(wrapper.prop('name')).toEqual('EN name');
    expect(wrapper.prop('onItemClick')).toBe(dummyClick);
    expect(wrapper.prop('selected')).toEqual(false);
  });

  it('looks as expected width another props ', () => {
    const props = {
      code: 'expectedCode',
      name: 'expectedName',
      selected: true
    };
    const wrapper = mount(<Item {...props} />);
    expect(wrapper.prop('code')).toEqual(props.code);
    expect(wrapper.prop('name')).toEqual(props.name);
    expect(wrapper.prop('onItemClick')).toBe(dummyClick);
    expect(wrapper.prop('selected')).toEqual(props.selected);
  });

  it('should not wrap content in a li tag', () => {
    const wrapper = shallow(<Item />);
    expect(wrapper.hasClass('dropdown__item')).toBe(true);
    expect(wrapper.is('li')).toBe(true);
  });
});
