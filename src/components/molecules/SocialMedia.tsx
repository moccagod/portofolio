import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import IconLink from "../atoms/IconLink";

const SocialMedia = () => {
  return (
    <div className="flex gap-4">
      <IconLink href="https://github.com/moccagod">
        <FaGithub size={24} />
      </IconLink>
      <IconLink href="https://linkedin.com/in/azminailalhadi">
        <FaLinkedin size={24} />
      </IconLink>
      <IconLink href="https://instagram.com/azminailalhadi">
        <FaInstagram size={24} />
      </IconLink>
    </div>
  );
};

export default SocialMedia;
