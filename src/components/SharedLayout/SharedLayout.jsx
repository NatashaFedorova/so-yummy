import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from 'components/Footer';
import Header from 'components/Header';
import Loading from 'components/Loading/Loading';

const SharedLayout = () => {
  return (
    <>
      <Header />
      <main style={{ flexGrow: '1', zIndex: '1' }}>
        <Suspense fallback={<Loading />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </>
  );
};

export default SharedLayout;

// style={{position: "relative"}}
