import Header from './Header';
import Footer from './Footer';

/**
 * Layout wrapper for all pages
 * Includes persistent Header and Footer
 */
const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
