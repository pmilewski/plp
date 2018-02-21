export const resetAllFilters = () => ({
  type: 'RESET_ALL_FILTERS'
});

export const toggleCategoriesFilter = () => ({
  type: 'TOGGLE_CATEGORIES_FILTER'
});

export const toggleColorsFilter = () => ({
  type: 'TOGGLE_COLORS_FILTER'
});

export const toggleSelectedCategory = categoryName => ({
  type: 'TOGGLE_SELECTED_CATEGORY',
  categoryName
});

export const toggleSelectedColor = colorName => ({
  type: 'TOGGLE_SELECTED_COLOR',
  colorName
});
