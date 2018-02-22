import React from 'react';
import { connect } from 'react-redux';
import { productActions } from '../../actions';
import promoUrls from '../../data/promoUrls';

const Product = ({ product, filters, promoImg, selectProductVariant }) => (
  <div
    className="product-list__item"
  >
    <p className="product-list__item__colors">
      { promoImg &&
      <img alt="promo" src={promoImg} style={{ marginTop: '-10px' }} />
      }


      { product.variants.map((variant, variantIdx) => (
        <span
          key={Math.random()}
          className={`product-list__item__colors__square ${
            variantIdx === product.selectedVariantIdx
              ? 'product-list__item__colors__square--selected'
              : ''
            }`
          }
          onClick={() => { selectProductVariant(variantIdx); }}
          style={{ backgroundColor: filters.colors.find(color => color.id === variant.colorId).code }}
        />
      ))}
    </p>

    <img
      className="product-list__item__picture"
      alt="product-pic"
      src={`${product.variants[product.selectedVariantIdx].picture}?${product.selectedVariantIdx}${product._id}`}
      // src="https://loremflickr.com/cache/resized/4582_26853503969_57a81289c4_320_240_nofilter.jpg"
    />

    <p className="product-list__item__name">
      {product.name}
    </p>
    <p className="product-list__item__price">
      {product.variants[product.selectedVariantIdx].price}
    </p>
    <p className="product-list__item__categories">
      { product.categoryIds.map(id => (
        <span key={Math.random()} className="product-list__item__categories__item">
          { filters.categories.find(category => category.id === id).name }
        </span>
      ))}
    </p>
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
