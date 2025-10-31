import Image from 'next/image';
import NextLink from './NextLink';

/**
 * Hero section with background image and animated CTA.
 * Supports optional background video by uncommenting relevant code block.
 */
const Hero = () => {
  return (
    <section className="hero position-relative">
      {/* Optional: Uncomment this block to use video background instead of static image */}
      {/*
      <figure className="video-container bg-gray">
        <div className="overlay"></div>
        <video
          autoPlay
          muted
          loop
          src="/img/hero-bg.mp4"
          className="video"
          playsInline
          aria-hidden="true"
        />
      </figure>
      */}

      {/* Background image with overlay */}
      <div className="position-absolute top-0 start-0 w-100 h-100 z-0">
        <Image
          src="/img/Hero-bgg.png"
          alt="Hero Background"
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
        <div
          className="overlay position-absolute w-100 h-100"
          style={{
            backgroundColor: 'rgba(0,0,0,0.5)',
            zIndex: 1,
          }}
        ></div>
      </div>

      {/* Foreground caption content */}
      <div className="container caption position-relative z-1">
        <div className="row" style={{ height: '85vh' }}>
          <div
            className="col-lg-8 p-5 text-center text-sm-start d-flex flex-column justify-content-center rounded"
            data-cues="slideInDown"
            data-group="page-title"
            data-interval="-200"
            data-delay="500"
          >
            <h2 className="fs-56 mb-4 text-white animate__animated animate__slideInDown animate__delay-1s">
              ENT Specialist in Location.
            </h2>

            <p className="lead fs-23 lh-sm mb-7 text-white animate__animated animate__slideInRight animate__delay-2s">
              Trust ENT for Comprehensive Ear, Nose & Throat Care in Location.
            </p>

            <div className="animate__animated animate__slideInUp animate__delay-3s">
              <NextLink
                title="Read More"
                href="#"
                className="btn btn-lg text-white secondary-bg rounded"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
