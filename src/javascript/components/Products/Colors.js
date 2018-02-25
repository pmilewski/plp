import React from 'react';
import PropTypes from 'prop-types';
import { emptyFunction } from '../../utilities';

const Colors = ({
  product, filters, promoImg, selectProductVariant
}) => (
  <p className="product-list__item__colors">
    { promoImg &&
    <img className="product-list__item__colors__promo" alt="promo" src={promoImg} />
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
);

Colors.propTypes = {
  product: PropTypes.object,
  filters: PropTypes.object,
  promoImg: PropTypes.string,
  selectProductVariant: PropTypes.func
};

Colors.defaultProps = {
  product: { variants: [] },
  filters: { colors: [] },
  promoImg: '',
  selectProductVariant: emptyFunction
};

export default Colors;
