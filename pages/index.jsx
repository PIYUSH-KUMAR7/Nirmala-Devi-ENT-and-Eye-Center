import { Fragment } from 'react';
import Head from 'next/head';
import PageProgress from 'components/PageProgress';
import Hero from 'components/Hero';
import About from 'components/About';
import Services from 'components/Services';

const Home = () => {
  return (
    <Fragment>
      <PageProgress />

      <Head>
        <title>Medicare Hospital and Wellness</title>
        <meta name="description" content="Trusted ENT care in Location. Discover our expert surgeries, treatments, and compassionate healthcare." />
        <link rel="canonical" href="https://medicare.com" />
      </Head>

      <main className="content-wrapper overflow-hidden">
        {/* Hero Section */}
        <Hero />

        {/* About Section */}
        <section className="wrapper bg-light">
          <div className="container pt-8 pt-md-15">
            <About
              imgPosition="right"
              imgSrc="/img/entt.jpg"
              heading="Best ENT Hospital in Location"
              para="Looking for the best ENT hospital in Your Location? Our expert team of ear, nose, and throat specialists provides advanced diagnosis and personalized treatment for all ENT problems — from sinus infections and hearing loss to voice disorders and head-and-neck surgeries. Using modern technology and patient-focused care, we ensure quick recovery and lasting relief. Visit us for expert consultation and world-class ENT treatment in Your Location."
              isH1="true"
            />
          </div>
        </section>

        {/* Surgeries Section */}
        <section className="wrapper bg-light py-10 py-md-14">
          <div className="container">
            <div className="col-md-10 col-lg-8">
              <p className="fs-80 fw-bolder sub-h2 position-relative">Surgeries</p>
              <h2 className="display-5 mb-16 fw-bold z-1 mt-n15 mt-md-n16 mt-lg-n17 sub-head">
                ENT Surgery in Location
                <span
                  className="ms-2 d-inline-block"
                  style={{
                    borderBottom: '3px solid #D8D8D8',
                    width: '30px',
                    height: 0,
                  }}
                />
              </h2>
            </div>

            {/* Services Grid */}
            <Services />
          </div>
        </section>
      </main>
    </Fragment>
  );
};

export default Home;
