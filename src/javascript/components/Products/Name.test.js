import React from 'react';

import Name from './Name';

describe('proper component mount', () => {
  it('looks as expected with default props ', () => {
    const wrapper = mount(<Name />);
    expect(wrapper.prop('name')).toEqual('EN name');
  });

  it('looks as expected with another props ', () => {
    const props = { name: 'name1' };
    const wrapper = mount(<Name {...props} />);
    expect(wrapper.prop('name')).toEqual(props.name);
  });

  it('should not wrap content in a p tag', () => {
    const wrapper = shallow(<Name />);
    expect(wrapper.hasClass('product-list__item__name')).toBe(true);
    expect(wrapper.is('p')).toBe(true);
  });
});
