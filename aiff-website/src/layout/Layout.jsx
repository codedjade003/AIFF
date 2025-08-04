// src/layout/Layout.jsx
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';

const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      <main className="pt-[56px]">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
