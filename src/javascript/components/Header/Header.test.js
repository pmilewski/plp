import React from 'react';

import Header from './index';
import Title from './Title';


it('should wrap content in a header tag', () => {
  const wrapper = shallow(<Header />);
  expect(wrapper.find(Title)).toHaveLength(1);
  expect(wrapper.is('header')).toBe(true);
  expect(wrapper.hasClass('header')).toBe(true);
});
