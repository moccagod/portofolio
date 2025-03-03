// src/components/templates/HomeTemplate.tsx
import Navbar from "../organisms/Navbar";
import HeroSection from "../organisms/HeroSection";
import Footer from "../organisms/Footer";
import AboutSection from "../organisms/AboutSection";
import JourneySection from "../organisms/JourneySection";
import TechSection from "../organisms/TechSection";
import GetInTouch from "../organisms/GetInTouch";

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
      <HeroSection />
      <AboutSection />
      <JourneySection />
      <TechSection />
      <GetInTouch />
      <Footer />
    </div>
  );
};

export default Home;
