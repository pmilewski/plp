import React from 'react';
import { Provider } from 'react-redux';
import store from '../../store';

import App from './App';
import Header from '../Header';
import ShippingInfo from '../ShippingInfo';
import Filters from '../Filters';
import Products from '../Products';
import Product from '../Products/Product';
import Footer from '../Footer';


const renderComponent = () => {
  const wrapper = mount(
    <Provider store={store}>
      <App />
    </Provider>
  );

  const storedState = () => store.getState();
  return [
    wrapper,
    storedState
  ];
};


describe('proper component mount', () => {
  it('looks as expected', () => {
    const [wrapper, storedState] = renderComponent();
    expect(wrapper.find(Header)).toHaveLength(1);
    expect(wrapper.find(ShippingInfo)).toHaveLength(1);
    expect(wrapper.find(Filters)).toHaveLength(1);
    expect(wrapper.find(Products)).toHaveLength(1);
    expect(wrapper.find(Product)).toHaveLength(20);
    expect(wrapper.find(Footer)).toHaveLength(1);

    expect(storedState().filters.categoriesFilterOpened).toBe(false);
    expect(storedState().filters.colorsFilterOpened).toBe(false);
  });
});

it('should wrap content in a span tag', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.is('div')).toBe(true);
  expect(wrapper.hasClass('app')).toBe(true);
});
