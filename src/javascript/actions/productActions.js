export const selectProductVariant = (productIdx, variantIdx) => ({
  type: 'SELECT_PRODUCT_VARIANT',
  productIdx,
  variantIdx
});
