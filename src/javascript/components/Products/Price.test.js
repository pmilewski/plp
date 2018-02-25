import React from 'react';

import Price from './Price';

describe('proper component mount', () => {
  it('looks as expected with default props ', () => {
    const wrapper = mount(<Price />);
    expect(wrapper.prop('price')).toEqual('EN price');
  });

  it('looks as expected with another props ', () => {
    const props = { price: 'price1' };
    const wrapper = mount(<Price {...props} />);
    expect(wrapper.prop('price')).toEqual(props.price);
  });

  it('should not wrap content in a p tag', () => {
    const wrapper = shallow(<Price />);
    expect(wrapper.hasClass('product-list__item__price')).toBe(true);
    expect(wrapper.is('p')).toBe(true);
  });
});
