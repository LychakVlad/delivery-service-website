import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

const PageLayout = () => (
  <>
    <div className="body">
      <Header />
      <main className="main">
        <Outlet />
      </main>
      <Footer />
    </div>
  </>
);

export default PageLayout;
