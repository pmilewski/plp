import React from 'react';
import { connect } from 'react-redux';
import { filterActions } from '../../actions';

import Dropdown from '../Dropdown';

const Colors = props => (
  <div className="filters__filter filters__filter--colors">
    <Dropdown {...props} />
  </div>
);

const mapState = (state, ownProps) => ({
  entries: state.filters.colors,
  label: 'Color',
  opened: state.filters.colorsFilterOpened,
  selectedEntries: state.filters.selectedColors
});

const mapDispatch = (dispatch, ownProps) => ({
  onItemClick: (colorName) => {
    dispatch(filterActions.toggleSelectedColor(colorName));
  },
  onLabelClick: () => {
    dispatch(filterActions.toggleColorsFilter());
  }
});

export default connect(mapState, mapDispatch)(Colors);
