export const selectCategories = state => state.addRecipe.categories;

export const selectIngredients = state => state.addRecipe.ingredients;

export const selectPopularReceipts = state => state.addRecipe.receipts;

export const selectPopularReceiptsError = state =>
  state.addRecipe.receiptsError;
