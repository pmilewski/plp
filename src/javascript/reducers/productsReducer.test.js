import { Reducer } from 'redux-testkit';
import { initialState, reducer as productsReducer } from './productsReducer';
import * as productActions from '../actions/productActions';

describe('productsReducer', () => {
  it('should have initial state', () => {
    Reducer(productsReducer).expect({ type: undefined }).toReturnState(initialState);
  });

  it('should select product variant', () => {
    const productIdx = 7;
    const variantIdx = 2;
    const expectedState = {
      ...initialState,
      products: [
        ...initialState.products.slice(0, productIdx),
        {
          ...initialState.products[productIdx],
          selectedVariantIdx: variantIdx
        },
        ...initialState.products.slice(productIdx + 1, initialState.products.length)
      ]
    };
    const action = productActions.selectProductVariant(productIdx, variantIdx);
    Reducer(productsReducer).withState(initialState).expect(action).toReturnState(expectedState);
  });
});
