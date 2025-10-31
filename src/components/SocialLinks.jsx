import Link from "next/link";

const links = [
  {
    id: 1,
    icon: 'uil uil-facebook-f',
    url: 'https://www.facebook.com/'
  },
  {
    id: 2,
    icon: 'uil uil-instagram',
    url: 'https://www.instagram.com/' 
  },
  {
    id: 3,
    icon: 'uil uil-whatsapp',
    url: 'https://api.whatsapp.com' 
  }
];

const SocialLinks = ({ className = 'nav social  mt-4' }) => {
  return (
    <nav className={className}>
      {links.map(({ id, icon, url }) => (
        <Link href={url} key={id} target="_blank" rel="noreferrer">
          <i className={`${icon} fs-30 bg-white rounded`} />
        </Link>
      ))}
    </nav>
  );
};

export default SocialLinks;
