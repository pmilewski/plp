import React from 'react';
import { Provider } from 'react-redux';
import store from '../../store';

import Categories from './Categories';
import Dropdown from '../Dropdown';


const renderComponent = () => (
  mount(
    <Provider store={store}>
      <Categories />
    </Provider>
  )
);

describe('proper component mount', () => {
  it('looks as expected', () => {
    const wrapper = renderComponent();
    expect(wrapper.find(Dropdown)).toHaveLength(1);
    expect(wrapper.find('.filters__filter').hasClass('filters__filter--categories')).toBe(true);
  });
});
