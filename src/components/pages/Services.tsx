import Navbar from "../organisms/Navbar";
import Footer from "../organisms/Footer";
import ServiceList from "../organisms/ServiceList";
import TechSection from "../organisms/TechSection";

const Services = () => {
  return (
    <div>
      <Navbar
        links={[
          { label: "Home", href: "/" },
          { label: "Portofolio", href: "/portofolio" },
          { label: "Services", href: "/services" },
        ]}
      />
      <ServiceList />
      <TechSection />
      <Footer />
    </div>
  );
};

export default Services;
