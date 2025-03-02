import Navbar from "../organisms/Navbar";
import Footer from "../organisms/Footer";

const Home = () => {
  return (
    <div>
      <Navbar
        links={[
          { label: "Home", href: "/" },
          { label: "Portofolio", href: "/portofolio" },
          { label: "Services", href: "/services" },
        ]}
      />
      <h1 className="text-center">Home Page</h1>
      <Footer />
    </div>
  );
};

export default Home;
