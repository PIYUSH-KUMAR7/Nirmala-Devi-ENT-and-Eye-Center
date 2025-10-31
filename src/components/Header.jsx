import { useRef } from 'react';
import Topbar from './Topbar';
import Navbar from './Navbar';
import useSticky from 'hooks/useSticky';

/**
 * Header component for layout
 * Includes Topbar and Navbar, with sticky behavior after scroll threshold
 */
const Header = () => {
  const stickyRef = useRef(null);

  // Detect if user has scrolled past 350px to apply "sticky" class
  const isSticky = useSticky(350);

  return (
    <header
      ref={stickyRef}
      className={`sticky-wrapper ${isSticky ? 'is-sticky' : ''}`}
    >
      <Topbar />
      <Navbar />
    </header>
  );
};

export default Header;
