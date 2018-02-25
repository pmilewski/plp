import React from 'react';

import Categories from './Categories';

describe('proper component mount', () => {
  it('looks as expected with default props ', () => {
    const wrapper = mount(<Categories />);
    expect(wrapper.prop('categoryIds')).toEqual([1, 2]);
    expect(wrapper.prop('categories')).toEqual([{ id: 1, name: 'category name1' }, { id: 2, name: 'category name2' }]);
  });

  it('looks as expected with another props ', () => {
    const props = {
      categoryIds: [7, 9],
      categories: [{ id: 7, name: 'category name7' }, { id: 9, name: 'category name9' }]
    };
    const wrapper = mount(<Categories {...props} />);
    expect(wrapper.prop('categoryIds')).toEqual(props.categoryIds);
    expect(wrapper.prop('categories')).toEqual(props.categories);
  });

  it('should not wrap content in a p tag', () => {
    const wrapper = shallow(<Categories />);
    expect(wrapper.hasClass('product-list__item__categories')).toBe(true);
    expect(wrapper.is('p')).toBe(true);
  });
});
