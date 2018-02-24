import React from 'react';
import ArrowUp from './ArrowUp';

it('should wrap content in a span tag', () => {
  const wrapper = shallow(<ArrowUp />);
  expect(wrapper.is('span')).toBe(true);
  expect(wrapper.hasClass('dropdown__label__arrow')).toBe(true);
});
