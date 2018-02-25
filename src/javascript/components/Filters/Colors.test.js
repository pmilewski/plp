import React from 'react';
import { Provider } from 'react-redux';
import store from '../../store';

import Colors from './Colors';
import Dropdown from '../Dropdown';


const renderComponent = () => (
  mount(
    <Provider store={store}>
      <Colors />
    </Provider>
  )
);

describe('proper component mount', () => {
  it('looks as expected', () => {
    const wrapper = renderComponent();
    expect(wrapper.find(Dropdown)).toHaveLength(1);
    expect(wrapper.find('.filters__filter').hasClass('filters__filter--colors')).toBe(true);
  });
});
