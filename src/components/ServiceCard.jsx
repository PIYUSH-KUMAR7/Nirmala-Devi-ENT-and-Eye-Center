import Image from 'next/image';
import NextLink from './NextLink';
import PropTypes from 'prop-types';

const ServiceCard = ({ title, src, description }) => {
  return (
    <div className="col-md-6 col-lg-4">
      <div className="card">
        <div className="card-body p-2">
          <Image
            src={src}
            alt={`${title} | ENT`}
            width={100}
            height={100}
            className="position-static my-5"
          />
          <h3>{title}</h3>
          <p className="px-5">{description}</p>
          <NextLink
            title="Learn More"
            href="#"
            className="btn btn-md text-white secondary-bg rounded mb-5"
          />
        </div>
      </div>
    </div>
  );
};

ServiceCard.propTypes = {
  title: PropTypes.string,
  src: PropTypes.string,
  description: PropTypes.string,
};

ServiceCard.defaultProps = {
  title: 'Untitled Service',
  src: '/img/default-service.png',
  description: 'No description available.',
};

export default ServiceCard;
