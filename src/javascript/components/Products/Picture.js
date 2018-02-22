import React from 'react';

const Picture = ({ variants, selectedVariantIdx, _id }) => (
  <img
    className="product-list__item__picture"
    alt="product-pic"
    src={`${variants[selectedVariantIdx].picture}?${selectedVariantIdx}${_id}`}
  />
);

export default Picture;
