import Banner from './Banner';
import NextLink from './NextLink';

// Reusable heading block
const HeadingBlock = ({ subHeading, spanHeading, heading, h3, isH1 }) => (
  <>
    {subHeading && (
      <h2 className="fs-14 text-uppercase sub-heading" style={{ color: '#31A14E' }}>
        {subHeading}
      </h2>
    )}
    {isH1 ? (
      <h1>
        {spanHeading && <span className="underline-3 style-3">{spanHeading}</span>} {heading}
      </h1>
    ) : (
      <h2>
        {spanHeading && <span className="underline-3 style-3">{spanHeading}</span>} {heading}
      </h2>
    )}
    {h3 && <h3 className="mb-3">{h3}</h3>}
  </>
);

// Reusable paragraph block
const ParagraphBlock = ({ para, para2, para3 }) => (
  <>
    {para && <p className="text-justify">{para}</p>}
    {para2 && <p className="text-justify">{para2}</p>}
    {para3 && <p className="text-justify">{para3}</p>}
  </>
);

// Reusable bullet list
const BulletList = ({ list }) => (
  <div className="row gy-3 text-justify">
    {list.map((item, i) => (
      <div className="col-12" key={i}>
        <ul className="icon-list bullet-bg bullet-soft-blue mb-0">
          {item.map((li, idx) => (
            <li key={li} className={idx !== 0 ? 'mt-3' : ''}>
              <i className="uil uil-circle" /> {li}
            </li>
          ))}
        </ul>
      </div>
    ))}
  </div>
);

// Main component
const About = ({
  imgPosition = 'left', // default position
  subHeading,
  heading,
  spanHeading,
  h3,
  para,
  para2,
  para3,
  list = [],
  btnName,
  btnUrl,
  imgSrc,
  isH1 = false,
  video,
  showShape = false
}) => {

  const isImageRight = imgPosition === 'right';

  // Conditional CSS classes
  const wrapperClasses = `row gy-10 gy-sm-13 gx-lg-3 align-items-center justify-content-center ${isImageRight ? 'justify-content-lg-end' : 'justify-content-lg-start'
    }`;
  const imageColumnClasses = `col-md-8 col-lg-6 d-flex justify-content-center ${isImageRight ? 'justify-content-lg-end' : 'justify-content-lg-start'
    }`;
  const contentColumnOrder = isImageRight ? 'col-lg-6 order-2 order-lg-0' : 'col-lg-6';

  return (
    <div className={wrapperClasses}>
      {/* Conditionally render image first or second */}
      {!isImageRight && (
        <div className={imageColumnClasses}>
          <Banner imageName={imgSrc} btnColor="blue" video={video} alt={heading} showShape={showShape} />
        </div>
      )}

      <div className={contentColumnOrder}>
        <HeadingBlock {...{ subHeading, spanHeading, heading, h3, isH1 }} />
        <ParagraphBlock {...{ para, para2, para3 }} />
        {list.length > 0 && <BulletList list={list} />}

        {btnName && btnUrl && (
          <div className="mt-5">
            <NextLink title={btnName} href={btnUrl} className={`btn btn-md secondary-bg text-white rounded`} />
          </div>
        )}
      </div>

      {isImageRight && (
        <div className={imageColumnClasses}>
          <Banner imageName={imgSrc} btnColor="blue" video={video} alt={heading} showShape={showShape} />
        </div>
      )}
    </div>
  );
};

export default About;
