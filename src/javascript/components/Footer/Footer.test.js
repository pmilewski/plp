import React from 'react';

import Footer from './index';


it('should wrap content in a div tag', () => {
  const wrapper = shallow(<Footer />);
  expect(wrapper.is('div')).toBe(true);
  expect(wrapper.hasClass('footer')).toBe(true);
});
