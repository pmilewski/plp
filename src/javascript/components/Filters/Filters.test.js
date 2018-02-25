import React from 'react';
import { Provider } from 'react-redux';
import store from '../../store';

import Categories from './Categories';
import Colors from './Colors';
import Filters from './index';
import Label from './Label';
import Selections from './Selections';


const renderComponent = () => (
  mount(
    <Provider store={store}>
      <Filters />
    </Provider>
  )
);


describe('proper component mount', () => {
  it('looks as expected', () => {
    const wrapper = renderComponent();
    expect(wrapper.find(Categories)).toHaveLength(1);
    expect(wrapper.find(Colors)).toHaveLength(1);
    expect(wrapper.find(Label)).toHaveLength(1);
    expect(wrapper.find(Selections)).toHaveLength(1);
  });
});

it('should wrap content in a div tag', () => {
  const wrapper = shallow(<Filters />);
  expect(wrapper.is('div')).toBe(true);
  expect(wrapper.hasClass('filters')).toBe(true);
});
