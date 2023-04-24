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

// import {themeReducer} from 'redux/theme/themeSlice';
import { authReducer } from 'redux/auth/authSlice';
import recipesByIdReducer from 'redux/recipes/recipesSlice/recipeByIdSlice';
import { userReducer } from './user/userSlice';
import { subscribeReducer } from './subcribe/subscribeSlice';
import mainCategoriesSliceReducer from 'redux/recipes/cateroriesSlice/categoriesSlice';
// import recipesReducer from 'redux/auth/authSlice';
import { categoryReducer } from './recipes/recipesSlice/categorySlice';
import { recipeByCategoryReducer } from './recipes/recipesSlice/recipesByCategorySlice';
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

// const themePersistConfig = {
//   key: 'theme',
//   storage,
// };

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    recipedById: recipesByIdReducer,
    recipeByCategorySlice: recipeByCategoryReducer,
    // recipes: recipesReducer,
    // theme: persistReducer(themePersistConfig, themeReducer),
    categories: categoryReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
