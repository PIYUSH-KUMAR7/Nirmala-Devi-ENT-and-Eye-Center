import { Fragment, useRef, useState } from 'react';
import useSticky from 'hooks/useSticky';
import Image from 'next/image';
import Link from 'next/link';

import NextLink from './NextLink';
import SocialLinks from './SocialLinks';
import ListItemLink from './ListItemLink';
import DropdownToggleLink from './DropdownToggleLink';

import { surgery, treatments, aboutUs } from '../data.js';

const Navbar = ({ navClassName, navOtherClass, fancy, stickyBox }) => {
  const sticky = useSticky(350);
  const navbarRef = useRef(null);

  const [surgeryCategory, setSurgeryCategory] = useState('ear');

  const handleSurgeryCategory = (category) => () => {
    setSurgeryCategory(category);
  };

  const surgeryMenu = [
    { id: 1, title: 'Ear Surgery', category: 'ear' },
    { id: 2, title: 'Nose Surgery', category: 'nose' },
    { id: 3, title: 'Throat Surgery', category: 'throat' },
    { id: 4, title: 'Head & Neck Surgery', category: 'head' }
  ];

  const renderLinks = (links) =>
    links.map((item) => (
      <ListItemLink
        href="#"
        title={item.title}
        linkClassName="dropdown-item"
        key={item.id}
      />
    ));

  const headerContent = (
    <Fragment>
      {/* ===== LOGO ONLY (NO TEXT) ===== */}
      <div className="navbar-brand w-100 d-flex align-items-center">
        <NextLink
          href="/"
          title={
            <Image
              alt="Hospital Logo"
              className="py-2"
              src="/img/logoo.png"
              width={120}
              height={70}
            />
          }
        />
      </div>

      {/* ===== OFFCANVAS NAV ===== */}
      <div
        id="offcanvas-nav"
        data-bs-scroll="true"
        className="navbar-collapse offcanvas offcanvas-nav offcanvas-start"
      >
        <div className="offcanvas-header d-lg-none offcavas-bg nav-logo">
          <NextLink
            href="/"
            title={
              <Image
                alt="Hospital Logo"
                src="/img/logoo.png"
                width={120}
                height={70}
                className="bg-white p-2 rounded"
              />
            }
          />
          <button
            type="button"
            aria-label="Close"
            data-bs-dismiss="offcanvas"
            className="btn-close btn-close-white ms-auto"
          />
        </div>

        <div className="offcanvas-body ms-lg-auto d-flex flex-column h-100 offcavas-bg">
          <ul className="navbar-nav">
            <li className="nav-item" data-bs-dismiss="offcanvas">
              <NextLink href="/" title="Home" className="nav-link" />
            </li>

            <li className="nav-item dropdown d-none d-lg-block">
              <DropdownToggleLink title="About Us" className="nav-link dropdown-toggle" />
              <ul className="dropdown-menu">
                {aboutUs.map(({ id, title, children }) =>
                  children ? (
                    <li className="dropdown dropdown-submenu dropend" key={id}>
                      <DropdownToggleLink title="About Us" />
                      <ul className="dropdown-menu">{renderLinks(children)}</ul>
                    </li>
                  ) : (
                    <ListItemLink
                      key={id}
                      href="#"
                      title={title}
                      linkClassName="dropdown-item"
                    />
                  )
                )}
              </ul>
            </li>

            <li className="nav-item dropdown d-none d-lg-block">
              <DropdownToggleLink title="Surgeries" className="nav-link dropdown-toggle" />
              <div className="dropdown-menu dropdown-lg">
                <div className="dropdown-lg-content">
                  <div>
                    {surgeryMenu.map(({ id, title, category }) => (
                      <h4 className="dropdown-header surgery-headings" key={id}>
                        <li onMouseEnter={handleSurgeryCategory(category)}>
                          <Link className="dropdown-item" href="#">
                            {title}
                          </Link>
                        </li>
                      </h4>
                    ))}
                  </div>
                </div>
              </div>
            </li>

            <li className="nav-item">
              <NextLink href="#" title="Contact Us" className="nav-link" />
            </li>

            <li className="nav-item align-items-center d-flex mt-3 mt-lg-0 ms-lg-3">
              <NextLink
                title="Book Appointment"
                href="#"
                className="btn btn-sm secondary-bg text-white rounded"
              />
            </li>
          </ul>

          <div className="offcanvas-footer d-lg-none">
            <SocialLinks />
          </div>
        </div>
      </div>

      <div className={navOtherClass}>
        <button
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvas-nav"
          className="hamburger offcanvas-nav-btn"
        >
          <span />
        </button>
      </div>
    </Fragment>
  );

  return (
    <Fragment>
      {stickyBox && (
        <div style={{ paddingTop: sticky ? navbarRef.current?.clientHeight : 0 }} />
      )}

      <nav
        ref={navbarRef}
        className={
          sticky
            ? 'navbar navbar-expand-lg center-nav transparent navbar-light navbar-clone fixed'
            : navClassName
        }
      >
        <div className="container flex-lg-row flex-nowrap align-items-center">
          {headerContent}
        </div>
      </nav>
    </Fragment>
  );
};

Navbar.defaultProps = {
  stickyBox: true,
  navOtherClass: 'navbar-other d-flex d-lg-none',
  navClassName: 'navbar navbar-expand-lg center-nav transparent navbar-light'
};

export default Navbar;
