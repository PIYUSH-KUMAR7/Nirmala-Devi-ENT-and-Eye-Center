import { Fragment } from 'react';
import { Breadcrumb } from 'react-bootstrap';
import NextLink from 'components/NextLink';

const NotFound = () => {
  return (
    <Fragment>
      {/* Header breadcrumb-style banner */}
      <Breadcrumb className="d-flex flex-column align-items-center justify-content-center pt-14 pb-14 breadcrumbs">
        <div className="overlay"></div>
        <div className="text-center box">
          <h1 className="fs-48 text-main">Not Found</h1>
          <p className="mt-2 text-white">{/* Optional message can be added here */}</p>
        </div>
      </Breadcrumb>

      {/* Main Content */}
      <main className="content-wrapper">
        <section className="wrapper bg-light">
          <div className="container pt-12 pt-md-14 pb-14 pb-md-16">
            <div className="row">
              <div className="col-lg-8 col-xl-7 col-xxl-6 mx-auto text-center">
                <h1 className="mb-3">Oops! Page Not Found.</h1>
                <p className="lead mb-7 px-md-12 px-lg-5 px-xl-7">
                  The page you are looking for is not available or has been moved. Try a different page or go to
                  homepage with the button below.
                </p>
                {/* Optional CTA button can be placed here */}
                <NextLink
                  title="Go To Homepage"
                  href="/"
                  className="btn btn-md secondary-bg text-white mb-lg-1 rounded border border-md-none"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </Fragment>
  );
};

export default NotFound;