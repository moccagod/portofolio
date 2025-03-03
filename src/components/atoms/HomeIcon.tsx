// src/components/atoms/SocialIcon.tsx
import { FC } from "react";

interface HomeIconProps {
  icon: string;
  href: string;
}

const HomeIcon: FC<HomeIconProps> = ({ icon, href }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-red-500 hover:text-red-700 transition duration-300 mx-2"
    >
      <i className={`fab fa-${icon} text-2xl`}></i>
    </a>
  );
};

export default HomeIcon;
