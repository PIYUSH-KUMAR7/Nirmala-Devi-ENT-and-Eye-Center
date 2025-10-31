import Link from "next/link";

const DropdownToggleLink = props => {
  const {
    title,
    className,
    ...others
  } = props;
  return <Link href="#" data-bs-toggle="dropdown" className={className || 'dropdown-item dropdown-toggle'} {...others}>
      {title}
    </Link>;
};

export default DropdownToggleLink;