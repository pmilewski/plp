import React from 'react';
import { connect } from 'react-redux';

import Product from './Product';

const Products = ({ products }) => (
  <div className="products-list">
    {
      products.map((product, index) =>
        <Product key={product._id} product={product} productIdx={index} />)
    }
  </div>
);


const mapState = (state, ownProps) => ({
  products: state.products.products
});

const mapDispatch = (dispatch, ownProps) => ({
});

export default connect(mapState, mapDispatch)(Products);
