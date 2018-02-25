import React from 'react';

import Colors from './Colors';
import { emptyFunction } from '../../utilities';

describe('proper component mount', () => {
  it('looks as expected with default props ', () => {
    const wrapper = mount(<Colors />);
    expect(wrapper.prop('product')).toEqual({ variants: [] });
    expect(wrapper.prop('filters')).toEqual({ colors: [] });
    expect(wrapper.prop('promoImg')).toEqual('');
    expect(wrapper.prop('selectProductVariant')).toEqual(emptyFunction);
  });

  it('should not wrap content in a p tag', () => {
    const wrapper = shallow(<Colors />);
    expect(wrapper.hasClass('product-list__item__colors')).toBe(true);
    expect(wrapper.is('p')).toBe(true);
  });
});
