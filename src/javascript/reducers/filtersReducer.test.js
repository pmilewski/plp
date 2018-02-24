import { Reducer } from 'redux-testkit';
import { initialState, reducer as filtersReducer } from './filtersReducer';
import * as filterActions from '../actions/filterActions';

describe('filtersReducer', () => {
  it('should have initial state', () => {
    Reducer(filtersReducer).expect({type: undefined}).toReturnState(initialState);
  });

  it('should reset all filters', () => {
    const existingState = {
      ...initialState,
      colorsFilterOpened: true,
      selectedCategories: ['Riding Hat/Stovepipe', 'Wellingtons'],
      selectedColors: ['Derby', 'Scuba']
    };
    const action = filterActions.resetAllFilters();
    Reducer(filtersReducer).withState(existingState).expect(action).toReturnState(initialState);
  });

  it('should toggle categories filter', () => {
    const existingState = {
      ...initialState,
      colorsFilterOpened: true
    };
    const expectedState = {
      ...initialState,
      categoriesFilterOpened: true
    };
    const action = filterActions.toggleCategoriesFilter();
    Reducer(filtersReducer).withState(existingState).expect(action).toReturnState(expectedState);
    Reducer(filtersReducer).withState(expectedState).expect(action).toReturnState(initialState);
  });

  it('should toggle categories filter', () => {
    const existingState = {
      ...initialState,
      categoriesFilterOpened: true
    };
    const expectedState = {
      ...initialState,
      colorsFilterOpened: true
    };
    const action = filterActions.toggleColorsFilter();
    Reducer(filtersReducer).withState(existingState).expect(action).toReturnState(expectedState);
    Reducer(filtersReducer).withState(expectedState).expect(action).toReturnState(initialState);
  });

  it('should toggle selected category', () => {
    const existingState = {
      ...initialState,
      selectedCategories: ['Riding Hat/Stovepipe', 'Wellingtons']
    };
    const expectedState = {
      ...initialState,
      selectedCategories: ['Riding Hat/Stovepipe']
    };
    const action = filterActions.toggleSelectedCategory('Wellingtons');
    Reducer(filtersReducer).withState(existingState).expect(action).toReturnState(expectedState);
    Reducer(filtersReducer).withState(expectedState).expect(action).toReturnState(existingState);
  });

  it('should toggle selected color', () => {
    const existingState = {
      ...initialState,
      selectedColors: ['Derby', 'Scuba']
    };
    const expectedState = {
      ...initialState,
      selectedColors: ['Derby']
    };
    const action = filterActions.toggleSelectedColor('Scuba');
    Reducer(filtersReducer).withState(existingState).expect(action).toReturnState(expectedState);
    Reducer(filtersReducer).withState(expectedState).expect(action).toReturnState(existingState);
  });
});
