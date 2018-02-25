import React from 'react';
import PropTypes from 'prop-types';

const Categories = ({ categoryIds, categories }) => (
  <p className="product-list__item__categories">
    { categoryIds.map(id => (
      <span key={Math.random()} className="product-list__item__categories__item">
        { categories.find(category => category.id === id).name }
      </span>
    ))}
  </p>
);

Categories.propTypes = {
  categoryIds: PropTypes.arrayOf(PropTypes.number),
  categories: PropTypes.arrayOf(PropTypes.object),
};

Categories.defaultProps = {
  categoryIds: [1, 2],
  categories: [{ id: 1, name: 'category name1' }, { id: 2, name: 'category name2' }]
};

export default Categories;
