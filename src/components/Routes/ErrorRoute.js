import { Navigate } from 'react-router-dom';
import useAuth from 'hooks/useAuth';
import { lazy } from 'react';
const ErrorNotFoundPage = lazy(() => import('page/ErrorNotFoundPage'));

const ErrorRoute = () => {
  const { isLoggedIn } = useAuth();
  const ErroeElem = isLoggedIn ? <ErrorNotFoundPage /> : <Navigate to="/" replace />;

  return ErroeElem;
};

export default ErrorRoute;