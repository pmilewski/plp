import colors from './data/colors';
import categories from './data/categories';

const productsFilteredByColor = state => (
  state.filters.selectedColors.length > 0
    ? state.products.products.filter(product => product.variants
      .map(variant => colors.find(color => color.id === variant.colorId).name)
      .some(colorName => state.filters.selectedColors.includes(colorName)))
    : state.products.products
);

const productsFilteredByCategory = state => (
  state.filters.selectedCategories.length > 0
    ? state.products.products.filter(product => product.categoryIds
      .map(categoryId => categories.find(category => category.id === categoryId).name)
      .some(categoryName => state.filters.selectedCategories.includes(categoryName)))
    : state.products.products);

const productsFilteredByCategoryAndColor = state => (
  productsFilteredByCategory(state).filter(product => productsFilteredByColor(state).indexOf(product) !== -1)
);

export { productsFilteredByCategoryAndColor };
