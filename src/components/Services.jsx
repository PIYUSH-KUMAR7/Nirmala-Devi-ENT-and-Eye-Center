import ServiceCard from './ServiceCard';
import { surgeryList } from '../data.js';

const Services = () => {
  if (!surgeryList || surgeryList.length === 0) return null; // Optional safeguard

  return (
    <>
      <div className="position-relative">
        <div className="row gx-md-5 gy-5 text-center justify-content-center">
          {surgeryList.map((item) => (
            <ServiceCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Services;
