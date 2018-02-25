import React from 'react';
import PropTypes from 'prop-types';

const Name = ({ name }) => <p className="product-list__item__name">{name}</p>;

Name.propTypes = {
  name: PropTypes.string
};

Name.defaultProps = {
  name: 'EN name'
};

export default Name;
