import React from 'react';

import Picture from './Picture';

describe('proper component mount', () => {
  it('looks as expected with default props ', () => {
    const wrapper = mount(<Picture />);
    expect(wrapper.prop('variants')).toEqual([{ picture: 'abc1.jpg' }, { picture: 'abc2.jpg' }]);
    expect(wrapper.prop('selectedVariantIdx')).toEqual(0);
    expect(wrapper.prop('_id')).toEqual('354grev453');
  });

  it('looks as expected with another props ', () => {
    const props = {
      variants: [{ picture: 'abc4.jpg' }, { picture: 'abc5.jpg' }],
      selectedVariantIdx: 0,
      _id: '35xxxd432'
    };
    const wrapper = mount(<Picture {...props} />);
    expect(wrapper.prop('variants')).toEqual(props.variants);
    expect(wrapper.prop('selectedVariantIdx')).toEqual(props.selectedVariantIdx);
    expect(wrapper.prop('_id')).toEqual(props._id);
  });

  it('should not wrap content in a img tag', () => {
    const wrapper = shallow(<Picture />);
    expect(wrapper.hasClass('product-list__item__picture')).toBe(true);
    expect(wrapper.is('img')).toBe(true);
  });
});
