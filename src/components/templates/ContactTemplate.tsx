import Navbar from "../organisms/Navbar";
import ContactSection from "../organisms/ContactSection";
import Footer from "../organisms/Footer";

const ContactTemplate = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar
        links={[
          { label: "Home", href: "/" },
          { label: "Portofolio", href: "/portofolio" },
          { label: "Services", href: "/services" },
        ]}
      />
      <div className="flex-grow">
        <ContactSection />
      </div>
      <Footer />
    </div>
  );
};

export default ContactTemplate;
