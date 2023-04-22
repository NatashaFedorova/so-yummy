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
// import recipesReducer from 'redux/auth/authSlice';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

// const themePersistConfig = {
//   key: 'theme',
//   storage,
// };

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    recipedById: recipesByIdReducer,
    users: userReducer,
    subscribe: subscribeReducer,
    // recipes: recipesReducer,
    // theme: persistReducer(themePersistConfig, themeReducer),
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
