import React from "react";

interface IconLinkProps {
  href: string;
  children: React.ReactNode;
}

const IconLink: React.FC<IconLinkProps> = ({ href, children }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-white hover:text-gray-400 transition"
    >
      {children}
    </a>
  );
};

export default IconLink;
