import NextLink from './NextLink';

/**
 * Reusable nav item wrapper around NextLink
 * Allows custom class names for both <li> and <a>
 */
const ListItemLink = ({
  href,
  title,
  linkClassName = 'nav-link',
  liClassName = 'nav-item',
}) => {
  return (
    <li className={liClassName}>
      <NextLink href={href} title={title} className={linkClassName} />
    </li>
  );
};

export default ListItemLink;
