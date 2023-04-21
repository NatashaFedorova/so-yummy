import { lazy } from 'react';
import { ThemeProvider } from 'styled-components';
import { Routes, Route } from 'react-router-dom';
import lightTheme from 'components/constants/theme/lightTheme';
// import darkTheme from 'components/constants/theme/darkTheme';
import Background from 'components/constants/Background';
import SharedLayout from 'components/SharedLayout';
import StartPage from 'page/StartPage';
import RegisterPage from 'page/RegisterPage';
import SigninPage from 'page/SigninPage';

const MainPage = lazy(() => import('page/MainPage'));
const CategoriesPage = lazy(() => import('page/CategoriesPage'));
const AddRecipePage = lazy(() => import('page/AddRecipePage'));
const FavoritePage = lazy(() => import('page/FavoritePage'));
const RecipePage = lazy(() => import('page/RecipePage'));
const MyRecipesPage = lazy(() => import('page/MyRecipesPage'));
const SearchPage = lazy(() => import('page/SearchPage'));
const ShoppingListPage = lazy(() => import('page/ShoppingListPage'));
const ErrorNotFoundPage = lazy(() => import('page/ErrorNotFoundPage'));

const App = () => {
  // render певних шляхів, за умови, що user = true або false
  const user = true;
  return (
    <ThemeProvider theme={lightTheme}>
      <Background>
        {!user ? (
          <Routes>
            <Route index element={<StartPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/signin" element={<SigninPage />} />
          </Routes>
        ) : (
          <Routes>
            <Route path="/" element={<SharedLayout />}>
              <Route path="/main" element={<MainPage />} />
              <Route
                path="/categories/:categoryName"
                element={<CategoriesPage />}
              />
              <Route path="/add" element={<AddRecipePage />} />
              <Route path="/favorite" element={<FavoritePage />} />
              <Route path="/recipe/:recipeId" element={<RecipePage />} />
              <Route path="/my" element={<MyRecipesPage />} />
              <Route path="/search" element={<SearchPage />} />
              <Route path="/shopping-list" element={<ShoppingListPage />} />
              <Route path="*" element={<ErrorNotFoundPage />} />
            </Route>
          </Routes>
        )}
      </Background>
    </ThemeProvider>
  );
};

export default App;
