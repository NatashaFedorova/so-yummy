import { Footer } from 'components/Footer/Footer';
import { Header } from 'components/Header/Header';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

export const SharedLayout = () => {
  return (
    <div>
      <Header />
      <Suspense fallback={<p>LOADING...</p>}>
        <Outlet />
      </Suspense>
      <Footer />
    </div>
  );
};
