import Home from "./components/pages/Home";
import Services from "./components/pages/Services";
import Contact from "./components/pages/Contact";
import { Routes, Route } from "react-router-dom";
import Portofolio from "./components/pages/Portofolio";
import LandingPage from "./components/pages/LandingPage";
import CompanyProfile from "./components/pages/CompanyProfile";
import Design from "./components/pages/Design";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/portofolio" element={<Portofolio />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/landingpage" element={<LandingPage />} />
      <Route path="/companyprofile" element={<CompanyProfile />} />
      <Route path="/design" element={<Design />} />
    </Routes>
  );
};

export default App;
