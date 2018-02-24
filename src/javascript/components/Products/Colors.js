import React from 'react';

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

export default Colors;
