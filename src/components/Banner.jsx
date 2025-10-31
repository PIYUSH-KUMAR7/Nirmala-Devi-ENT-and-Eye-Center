import { Fragment } from 'react';
import Image from 'next/image';
import Link from 'next/link';

/**
 * Banner Component
 * Displays a hero banner image with optional video play button and decorative shape.
 *
 * Props:
 * - alt: string (image alt text)
 * - imageName: string (base name of the image without extension)
 * - btnColor: string (Bootstrap color class, e.g., 'danger', 'primary')
 * - video: boolean (if true, shows video play button)
 * - showShape: boolean (if true, shows decorative shape behind image)
 */
const Banner = ({ alt, imageName, btnColor = 'danger', video = false, showShape = false }) => {
  return (
    <Fragment>
      {/* Video play button overlay (optional) */}
      {video && (
        <Link
          data-glightbox
          href="/img/hero-bg.mp4"
          className={`btn btn-circle btn-${btnColor} btn-play ripple mx-auto mb-5 position-absolute`}
          style={{
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 3
          }}
        >
          <i className="icn-caret-right" />
        </Link>
      )}

      {/* Banner image with optional background shape */}
      <figure className="rounded image position-relative mt-5 mt-lg-0">
        {showShape && (
          <div
            className="shape rounded img-bg rellax d-md-block"
            style={{
              width: '100%',
              height: '100%',
              left: '-1.5rem',
              bottom: '-1.8rem',
              position: 'absolute',
              zIndex: 1
            }}
          />
        )}

        <Image
          src={imageName}
          alt={`${alt} | ENT`}
          width={500}
          height={400}
          className="position-relative z-2"
          priority
        />
      </figure>
    </Fragment>
  );
};

export default Banner;
