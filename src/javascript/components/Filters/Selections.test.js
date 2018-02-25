import React from 'react';
import { Provider } from 'react-redux';
import store from '../../store';
import { filterActions } from '../../actions';

import Selections from './Selections';
import Selection from './Selection';

const renderComponent = () => (
  mount(
    <Provider store={store}>
      <Selections />
    </Provider>
  )
);

describe('proper component mount', () => {
  it('looks as expected with default props', () => {
    const wrapper = renderComponent();
    expect(wrapper.find(Selection)).toHaveLength(0);
    expect(wrapper.find('.filters__selections').is('div')).toBe(true);
  });
});
