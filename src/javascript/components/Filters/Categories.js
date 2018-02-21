import React from 'react';
import { connect } from 'react-redux';
import { filterActions } from '../../actions';

import Dropdown from '../Dropdown';

const Categories = props => (
  <div className="filters__filter filters__filter--categories">
    <Dropdown {...props} />
  </div>
);

const mapState = (state, ownProps) => ({
  entries: state.filters.categories,
  label: 'Category',
  opened: state.filters.categoriesFilterOpened,
  selectedEntries: state.filters.selectedCategories
});

const mapDispatch = (dispatch, ownProps) => ({
  onItemClick: (categoryName) => {
    dispatch(filterActions.toggleSelectedCategory(categoryName));
  },
  onLabelClick: () => {
    dispatch(filterActions.toggleCategoriesFilter());
  }
});

export default connect(mapState, mapDispatch)(Categories);
