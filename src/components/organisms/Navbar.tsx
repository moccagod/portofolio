import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Icon burger dan close

const Navbar = ({ links }: { links: { label: string; href: string }[] }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-xl sticky top-0 z-10">
      <div className="flex justify-between items-center p-4">
        {/* Logo */}
        <div className="flex flex-col">
          <span className="font-bold text-lg">
            AZMI <span className="font-normal">NAILAL HADI</span>
          </span>
          <span className="text-sm text-gray-600">WEB DEVELOPER</span>
        </div>

        {/* Tombol Burger (Muncul di Mobile) */}
        <button
          className="md:hidden text-black"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Navigasi Menu (Desktop) */}
        <ul className="hidden md:flex space-x-6">
          {links.map((link, index) => (
            <li key={index}>
              <Link
                to={link.href === "#" ? "/" : link.href}
                className="text-black font-semibold hover:text-gray-500 transition"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Tombol "Work With Me" (Desktop) */}
        <Link
          to="/contact"
          className="hidden md:block bg-black hover:bg-gray-700 duration-300 text-white px-4 py-2 font-semibold"
        >
          WORK WITH ME
        </Link>
      </div>

      {/* Mobile Menu (Dropdown) */}
      {isOpen && (
        <ul className="md:hidden bg-white shadow-md flex flex-col items-center space-y-4 py-6">
          {links.map((link, index) => (
            <li key={index}>
              <Link
                to={link.href === "#" ? "/" : link.href}
                className="text-black font-semibold hover:text-gray-500 transition"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
          {/* Tombol "Work With Me" (Mobile) */}
          <Link
            to="/contact"
            className="bg-black hover:bg-gray-700 duration-300 text-white px-4 py-2 font-semibold"
            onClick={() => setIsOpen(false)}
          >
            WORK WITH ME
          </Link>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
