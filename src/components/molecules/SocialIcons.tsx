import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaGoogle,
  FaYoutube,
} from "react-icons/fa";
import SocialIcon from "../atoms/SocialIcon";

const SocialIcons = () => {
  return (
    <div className="flex space-x-4">
      <SocialIcon>
        <FaFacebook />
      </SocialIcon>
      <SocialIcon>
        <FaInstagram />
      </SocialIcon>
      <SocialIcon>
        <FaTwitter />
      </SocialIcon>
      <SocialIcon>
        <FaGoogle />
      </SocialIcon>
      <SocialIcon>
        <FaYoutube />
      </SocialIcon>
    </div>
  );
};

export default SocialIcons;
