import React from 'react';

import ShippingInfo from './index';


it('should wrap content in a div tag', () => {
  const wrapper = shallow(<ShippingInfo />);
  expect(wrapper.is('div')).toBe(true);
  expect(wrapper.hasClass('shipping-info')).toBe(true);
});
