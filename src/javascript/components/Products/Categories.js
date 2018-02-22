import React from 'react';

const Categories = ({ categoryIds, categories }) => (
  <p className="product-list__item__categories">
    { categoryIds.map(id => (
      <span key={Math.random()} className="product-list__item__categories__item">
        { categories.find(category => category.id === id).name }
      </span>
    ))}
  </p>
);

export default Categories;
