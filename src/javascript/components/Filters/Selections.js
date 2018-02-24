import React from 'react';
import { connect } from 'react-redux';
import { filterActions } from '../../actions';

import Selection from './Selection';

const Selections = ({
  onResetAllClick, onSelectedColorClick, onSelectedCategoryClick, selectedCategories, selectedColors,
  withManySelections, selectionModifier
}) => (
  <div className={`filters__selections ${withManySelections ? 'filters__selections--with-many-selections' : ''}`}>
    { selectedCategories.length + selectedColors.length > 0 &&
      <Selection key="resetAll" name="Reset All" modifier="--reset-all" onSelectionClick={onResetAllClick} />
    }
    { selectedCategories.map(category =>
      <Selection key={category} name={category} modifier={selectionModifier} onSelectionClick={onSelectedCategoryClick} />)
    }

    { selectedColors.map(color =>
      <Selection key={color} name={color} modifier={selectionModifier} onSelectionClick={onSelectedColorClick} />)
    }
  </div>
);

const mapState = (state, ownProps) => {
  const selectionsCount = state.filters.selectedCategories.length + state.filters.selectedColors.length;
  // const selectionModifier = selectionsCount > 10 ? '--hidden' : (selectionsCount > 5 ? '--small' : '');
  const selectionModifier = selectionsCount > 5 ? '--small' : '';
  return {
    selectedCategories: state.filters.selectedCategories,
    selectedColors: state.filters.selectedColors,
    selectionModifier
  };
};

const mapDispatch = (dispatch, ownProps) => ({
  onResetAllClick: () => {
    dispatch(filterActions.resetAllFilters());
  },
  onSelectedColorClick: (colorName) => {
    dispatch(filterActions.toggleSelectedColor(colorName));
  },
  onSelectedCategoryClick: (categoryName) => {
    dispatch(filterActions.toggleSelectedCategory(categoryName));
  }
});

export default connect(mapState, mapDispatch)(Selections);
