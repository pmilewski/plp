import React from 'react';

import Label from './Label';


it('should wrap content in a p tag', () => {
  const wrapper = shallow(<Label />);
  expect(wrapper.is('p')).toBe(true);
  expect(wrapper.hasClass('filters__label')).toBe(true);
});
