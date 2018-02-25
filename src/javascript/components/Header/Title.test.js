import React from 'react';

import Title from './Title';


it('should wrap content in a h1 tag', () => {
  const wrapper = shallow(<Title />);
  expect(wrapper.is('h1')).toBe(true);
  expect(wrapper.hasClass('header__title')).toBe(true);
});
