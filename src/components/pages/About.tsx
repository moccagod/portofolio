import Navbar from "../organisms/Navbar";

const About = () => {
  return (
    <div>
      <Navbar
        links={[
          { label: "Home", href: "/" },
          { label: "Portofolio", href: "/portofolio" },
          { label: "Services", href: "/services" },
        ]}
      />
      <h2 className="text-center">About Page</h2>
    </div>
  );
};

export default About;
