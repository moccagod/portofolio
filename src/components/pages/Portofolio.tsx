import Navbar from "../organisms/Navbar";
import Footer from "../organisms/Footer";

const Portofolio = () => {
  return (
    <div>
      <Navbar
        links={[
          { label: "Home", href: "/" },
          { label: "Portofolio", href: "/portofolio" },
          { label: "Services", href: "/services" },
        ]}
      />
      <h1 className="text-center ">Portofolio Page</h1>
      <Footer />
    </div>
  );
};

export default Portofolio;
