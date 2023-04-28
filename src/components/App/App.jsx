import { lazy, useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { Routes, Route, useLocation } from 'react-router-dom';
import selectStatusTheme from 'redux/theme/selectors';
import lightTheme from 'components/constants/theme/lightTheme';
import darkTheme from 'components/constants/theme/darkTheme';
import Background from 'components/constants/Background';
import ScrollToTopComponent from 'components/ScrollToTopComponent';
import SharedLayout from 'components/SharedLayout';
import WelcomePage from 'page/WelcomePage';
import RegisterPage from 'page/RegisterPage';
import SigninPage from 'page/SigninPage';

import { useDispatch, useSelector } from 'react-redux';
import useAuth from 'hooks/useAuth';
import { refreshUser } from 'redux/auth/authOperation';
import { RestrictedRoute, PrivateRoute, ErrorRoute } from 'components/Routes';
import Loading from 'components/Loading/Loading';
import { animateScroll } from 'react-scroll';

const MainPage = lazy(() => import('page/MainPage'));
const CategoriesPage = lazy(() => import('page/CategoriesPage'));
const AddRecipePage = lazy(() => import('page/AddRecipePage'));
const FavoritePage = lazy(() => import('page/FavoritePage'));
const RecipePage = lazy(() => import('page/RecipePage'));
const MyRecipesPage = lazy(() => import('page/MyRecipesPage'));
const SearchPage = lazy(() => import('page/SearchPage'));
const ShoppingListPage = lazy(() => import('page/ShoppingListPage'));

const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing, isLoggedIn } = useAuth();
  const [render, setRender] = useState(1);
  const location = useLocation();

  useEffect(() => {
    animateScroll.scrollToTop();
  }, [location]);

  useEffect(() => {
    if (render) {
      setRender(0);
      return;
    }
    dispatch(refreshUser());
  }, [dispatch, render, setRender]);

  const value = useSelector(selectStatusTheme);
  const theme = value ? darkTheme : lightTheme;

  // return isRefreshing && !render ? (
  return isRefreshing ? (
    <Loading />
  ) : (
    <ThemeProvider theme={theme}>
      <Background>
        {isLoggedIn && <ScrollToTopComponent />}
        <Routes>
          <Route
            path="/"
            element={
              <RestrictedRoute component={WelcomePage} redirectTo="main" />
            }
          />
          <Route
            path="/register"
            element={
              <RestrictedRoute component={RegisterPage} redirectTo="/main" />
            }
          />
          <Route
            path="/signin"
            element={
              <RestrictedRoute component={SigninPage} redirectTo="/main" />
            }
          />

          <Route path="/" element={<SharedLayout />}>
            <Route
              path="/main"
              element={<PrivateRoute component={MainPage} redirectTo="/" />}
            />
            <Route
              path="/categories/:categoryName"
              element={
                <PrivateRoute component={CategoriesPage} redirectTo="/" />
              }
            />
            <Route
              path="/add"
              element={
                <PrivateRoute component={AddRecipePage} redirectTo="/" />
              }
            />
            <Route
              path="/favorite"
              element={<PrivateRoute component={FavoritePage} redirectTo="/" />}
            />
            <Route
              path="/recipe/:recipeId"
              element={<PrivateRoute component={RecipePage} redirectTo="/" />}
            />
            <Route
              path="/my"
              element={
                <PrivateRoute component={MyRecipesPage} redirectTo="/" />
              }
            />
            <Route
              path="/search"
              element={<PrivateRoute component={SearchPage} redirectTo="/" />}
            />
            <Route
              path="/shopping-list"
              element={
                <PrivateRoute component={ShoppingListPage} redirectTo="/" />
              }
            />
            <Route path="*" element={<ErrorRoute />} />
          </Route>
        </Routes>
      </Background>
    </ThemeProvider>
  );
};

export default App;
