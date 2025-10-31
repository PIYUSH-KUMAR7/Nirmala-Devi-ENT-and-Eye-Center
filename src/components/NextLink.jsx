import Link from 'next/link';

// ==============================================================
const NextLink = props => {
  const {
    className,
    href,
    title
  } = props;
  return <Link href={href} className={className}>
    {title}
  </Link>;
};

export default NextLink;