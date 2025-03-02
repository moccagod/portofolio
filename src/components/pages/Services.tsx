import Navbar from "../organisms/Navbar";
import Footer from "../organisms/Footer";
import ServiceList from "../organisms/ServiceList";
import TechSection from "../organisms/TechSection";
import ReviewSection from "../organisms/ReviewSection";
import GetInTouch from "../organisms/GetInTouch";

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
      <ReviewSection />
      <GetInTouch />
      <Footer />
    </div>
  );
};

export default Services;
