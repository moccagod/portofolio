import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Contact from './components/pages/Contact';
import { Routes, Route } from 'react-router-dom';
import Portofolio from './components/pages/Portofolio';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/portofolio" element={<Portofolio />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  )
}

export default App;
