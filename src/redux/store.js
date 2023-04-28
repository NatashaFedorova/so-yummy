import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import { themeReducer } from 'redux/theme/themeSlice';
import { authReducer } from 'redux/auth/authSlice';
import { recipesByIdReducer } from 'redux/recipes/recipesSlice/recipeByIdSlice';
import mainCategoriesSliceReducer from 'redux/recipes/recipesSlice/categoriesMainSlice';
// import recipesReducer from 'redux/auth/authSlice';
import { categoryReducer } from './recipes/recipesSlice/categorySlice';
import { recipeByCategoryReducer } from './recipes/recipesSlice/recipesByCategorySlice';
//import { recipeToFavoriteReducer } from './recipes/recipesSlice/addRecipeToFavoriteSlice';
import { favoriteReducer } from 'redux/favorite/favoriteSlice';
import { addRecipeReducer } from './recipes/recipesSlice/addRecipeSlice';
import { myRecipesReducer } from './myRecipes/myRecipesSlice';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

// const categoryPersistConfig = {
//   key: 'mainCategories',
//   storage,
//   // whitelist:
// };

const themePersistConfig = {
  key: 'theme',
  storage,
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    favorite: favoriteReducer,
    myRecipes: myRecipesReducer,
    recipedById: recipesByIdReducer,
    recipeByCategorySlice: recipeByCategoryReducer,
    mainCategories: mainCategoriesSliceReducer,
    //reciteToFavorite: recipeToFavoriteReducer,
    theme: persistReducer(themePersistConfig, themeReducer),
    categories: categoryReducer,
    addRecipe: addRecipeReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
