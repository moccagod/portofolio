import { Link } from "react-router-dom";

const FooterLink = ({ label, href }: { label: string; href: string }) => {
  return (
    <li>
      <Link to={href} className="text-white hover:text-gray-400">
        {label}
      </Link>
    </li>
  );
};

export default FooterLink;
