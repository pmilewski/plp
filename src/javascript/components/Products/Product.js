import React from 'react';
import { connect } from 'react-redux';
import { productActions } from '../../actions';
import promoUrls from '../../data/promoUrls';
import Colors from './Colors';
import Picture from './Picture';
import Name from './Name';
import Price from './Price';
import Categories from './Categories';

const Product = ({
  product, filters, promoImg, selectProductVariant
}) => (
  <div className="product-list__item">
    <Colors {...{
      product, filters, promoImg, selectProductVariant
      }}
    />
    <Picture {...product} />
    <Name name={product.name} />
    <Price price={product.variants[product.selectedVariantIdx].price} />
    <Categories categoryIds={product.categoryIds} categories={filters.categories} />
  </div>
);

const mapState = (state, ownProps) => ({
  filters: state.filters,
  promoImg: promoUrls[ownProps.product.variants[ownProps.product.selectedVariantIdx].promo]
});

const mapDispatch = (dispatch, ownProps) => ({
  selectProductVariant: (variantIdx) => {
    dispatch(productActions.selectProductVariant(ownProps.productIdx, variantIdx));
  }
});

export default connect(mapState, mapDispatch)(Product);
