import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from 'components/Footer';
import Header from 'components/Header';

const SharedLayout = () => {
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

export default SharedLayout;
