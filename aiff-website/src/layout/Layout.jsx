// src/layout/Layout.jsx
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';

const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      <main className="pt-[90px]">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
