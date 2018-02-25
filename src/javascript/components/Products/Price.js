import React from 'react';
import PropTypes from 'prop-types';

const Price = ({ price }) => <p className="product-list__item__price">{price}</p>;

Price.propTypes = {
  price: PropTypes.string
};

Price.defaultProps = {
  price: 'EN price'
};

export default Price;
