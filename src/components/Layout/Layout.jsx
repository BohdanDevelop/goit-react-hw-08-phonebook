import { Outlet } from 'react-router-dom';
import Navigation from '../Navigation';

const Layout = () => {
  return (
    <>
      <header>
        <Navigation />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};
export default Layout;
