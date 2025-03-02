import Navbar from "../organisms/Navbar";
const LandingPage = () => {
  return (
    <div>
      <Navbar
        links={[
          { label: "Home", href: "/" },
          { label: "Portofolio", href: "/portofolio" },
          { label: "Services", href: "/services" },
        ]}
      />
      <h1 className="text-center">Landing Page</h1>
    </div>
  );
};

export default LandingPage;
