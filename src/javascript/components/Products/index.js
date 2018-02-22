import React from 'react';
import { connect } from 'react-redux';
import { productsFilteredByCategoryAndColor } from '../../helpers';
import Product from './Product';

const Products = ({ filteredProducts, products }) => (
  <div className="products-list">
    {
      filteredProducts.map((product) => (
        <Product
          key={product._id}
          product={product}
          productIdx={products.indexOf(product)}
        />
      ))
    }
  </div>
);


const mapState = (state, ownProps) => ({
  products: state.products.products,
  filteredProducts: productsFilteredByCategoryAndColor(state)
});

const mapDispatch = (dispatch, ownProps) => ({
});

export default connect(mapState, mapDispatch)(Products);
