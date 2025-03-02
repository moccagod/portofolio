import FooterLink from "../atoms/FooterLink";

const FooterNav = () => {
  return (
    <ul className="flex space-x-6 text-lg font-medium">
      <FooterLink label="Home" href="/" />
      <FooterLink label="News" href="/news" />
      <FooterLink label="About" href="/about" />
      <FooterLink label="Contact Us" href="/contact" />
      <FooterLink label="Our Team" href="/team" />
    </ul>
  );
};

export default FooterNav;
