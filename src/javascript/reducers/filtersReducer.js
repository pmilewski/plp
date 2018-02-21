import categories from '../data/categories';
import colors from '../data/colors';

const initialState = {
  categories,
  categoriesFilterOpened: false,
  colors,
  colorsFilterOpened: false,
  selectedCategories: [],
  selectedColors: []
};

export default function reducer(state = initialState, action) {
  const selectedCategoryIdx = state.selectedCategories.indexOf(action.categoryName);
  const selectedColorIdx = state.selectedColors.indexOf(action.colorName);

  switch (action.type) {
    case 'RESET_ALL_FILTERS':
      return initialState;
    case 'TOGGLE_CATEGORIES_FILTER':
      return {
        ...state,
        categoriesFilterOpened: !state.categoriesFilterOpened,
        colorsFilterOpened: false
      };
    case 'TOGGLE_COLORS_FILTER':
      return {
        ...state,
        categoriesFilterOpened: false,
        colorsFilterOpened: !state.colorsFilterOpened
      };
    case 'TOGGLE_SELECTED_CATEGORY':
      if (selectedCategoryIdx === -1) {
        return {
          ...state,
          selectedCategories: [
            ...state.selectedCategories,
            action.categoryName
          ]
        };
      }
      return {
        ...state,
        selectedCategories: [
          ...state.selectedCategories.slice(0, selectedCategoryIdx),
          ...state.selectedCategories.slice(selectedCategoryIdx + 1, state.selectedCategories.length)
        ]
      };
    case 'TOGGLE_SELECTED_COLOR':
      if (selectedColorIdx === -1) {
        return {
          ...state,
          selectedColors: [
            ...state.selectedColors,
            action.colorName
          ]
        };
      }
      return {
        ...state,
        selectedColors: [
          ...state.selectedColors.slice(0, selectedColorIdx),
          ...state.selectedColors.slice(selectedColorIdx + 1, state.selectedColors.length)
        ]
      };
    default:
      return state;
  }
}
