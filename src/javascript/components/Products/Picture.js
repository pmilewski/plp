import React from 'react';
import PropTypes from 'prop-types';

const Picture = ({ variants, selectedVariantIdx, _id }) => (
  <img
    className="product-list__item__picture"
    alt="product-pic"
    src={`${variants[selectedVariantIdx].picture}?${selectedVariantIdx}${_id}`}
  />
);

Picture.propTypes = {
  variants: PropTypes.arrayOf(PropTypes.object),
  selectedVariantIdx: PropTypes.number,
  _id: PropTypes.string
};

Picture.defaultProps = {
  variants: [{ picture: 'abc1.jpg' }, { picture: 'abc2.jpg' }],
  selectedVariantIdx: 0,
  _id: '354grev453'
};


export default Picture;
