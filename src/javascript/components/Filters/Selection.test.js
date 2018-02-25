import React from 'react';

import Selection from './Selection';
import {emptyFunction} from "../../utilities";


describe('proper component mount', () => {
  it('handles onClick', () => {
    const props = { onSelectionClick: jest.fn() };
    const wrapper = shallow(<Selection {...props} />);
    wrapper.find('div').simulate('click', { preventDefault: () => emptyFunction });
    expect(props.onSelectionClick.mock.calls.length).toBe(1);
  });

  it('should wrap content in a div tag', () => {
    const wrapper = shallow(<Selection/>);
    expect(wrapper.is('div')).toBe(true);
    expect(wrapper.hasClass('filters__selections__selection')).toBe(true);
  });
});
