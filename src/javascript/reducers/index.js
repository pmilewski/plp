import { combineReducers } from 'redux';
import filters from './filtersReducer';
import products from './productsReducer';

export default combineReducers({
  filters,
  products
});
