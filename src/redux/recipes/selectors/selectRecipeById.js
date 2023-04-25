export const selectRecipeById = state => state.recipedById.items;
export const selectRecipeByIdStatus = state => state.recipedById.status;
export const AddIngredientToShopList = state => state.auth.user.shoppingList;