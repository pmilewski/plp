import React from 'react';
import { connect } from 'react-redux';
import { productsFilteredByCategoryAndColor } from '../../helpers';
import Product from './Product';

const Products = ({ filteredProducts }) => (
  <div className="products-list">
    {
      filteredProducts.map((product, index) =>
        <Product key={product._id} product={product} productIdx={index} />)
    }
  </div>
);


const mapState = (state, ownProps) => ({
  filteredProducts: productsFilteredByCategoryAndColor(state)
});

const mapDispatch = (dispatch, ownProps) => ({
});

export default connect(mapState, mapDispatch)(Products);
