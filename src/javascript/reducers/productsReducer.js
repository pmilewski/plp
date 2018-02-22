import products from '../data/products';

const initialState = {
  products: products.map(product => ({
    ...product,
    selectedVariantIdx: 0
  }))
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'SELECT_PRODUCT_VARIANT':
      // debugger
      return {
        products: [
          ...state.products.slice(0, action.productIdx),
          {
            ...state.products[action.productIdx],
            selectedVariantIdx: action.variantIdx
          },
          ...state.products.slice(action.productIdx + 1, state.products.length)
        ]
      }

    default:
      return state;
  }
}
