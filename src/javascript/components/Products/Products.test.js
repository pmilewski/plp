import React from 'react';
import { Provider } from 'react-redux';
import store from '../../store';

import Products from './index';
import Product from './Product';

const renderComponent = () => (
  mount(
    <Provider store={store}>
      <Products />
    </Provider>
  )
);


describe('proper component mount', () => {
  it('looks as expected with default props', () => {
    const wrapper = renderComponent();
    expect(wrapper.find(Products)).toHaveLength(1);
    expect(wrapper.find(Product)).toHaveLength(20);
    expect(wrapper.find('.products-list').is('div')).toBe(true);
  });
});
