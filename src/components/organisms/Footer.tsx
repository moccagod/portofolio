import Copyright from "../atoms/Copyright";
import SocialMedia from "../molecules/SocialMedia";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-6 md:px-4 mt-4">
      <div className="flex flex-col md:flex-row items-center justify-between gap-5">
        <SocialMedia />
        <Copyright />
      </div>
    </footer>
  );
};

export default Footer;
