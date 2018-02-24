import React from 'react';
import ArrowDown from './ArrowDown';

it('should wrap content in a span tag', () => {
  const wrapper = shallow(<ArrowDown />);
  expect(wrapper.is('span')).toBe(true);
  expect(wrapper.hasClass('dropdown__label__arrow')).toBe(true);
});
