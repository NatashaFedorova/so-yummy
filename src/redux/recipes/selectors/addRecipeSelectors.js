export const selectCategories = state => state.addRecipe.categories;

export const selectIngredients = state => state.addRecipe.ingredients;

export const selectPopularReceipts = state => state.addRecipe.receipts;

export const selectPopularReceiptsError = state =>
  state.addRecipe.receiptsError;

export const selectAddRecipeError = state => state.addRecipe.addRecipeError;

export const selectIsLoading = state => state.addRecipe.isLoading;

export const selectAddRecipeIsLoading = state =>
  state.addRecipe.addRecipeIsLoading;
