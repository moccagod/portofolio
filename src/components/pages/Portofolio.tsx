import Navbar from "../organisms/Navbar";
import Footer from "../organisms/Footer";
import ProjectTable from "../organisms/ProjectTable";

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

      <ProjectTable />

      <Footer />
    </div>
  );
};

export default Portofolio;
