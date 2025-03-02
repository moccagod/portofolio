import { Link } from "react-router-dom";

const Navbar = ({ links }: { links: { label: string; href: string }[] }) => {
  return (
    <nav className="flex justify-between bg-white items-center p-4 mb-2 sticky top-0 shadow-xl z-10">
      {/* Logo dan subjudul */}
      <div className="flex flex-col">
        <span className="font-bold text-lg">
          AZMI <span className="font-normal">NAILAL HADI</span>
        </span>
        <span className="text-sm text-gray-600">
          WEB DEVELOPER
        </span>
      </div>

      {/* Daftar tautan */}
      <ul className="flex space-x-6">
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

      {/* Tombol khusus */}
      <Link
        to="/contact"
        className="bg-black hover:bg-gray-700 duration-300 text-white px-4 py-2 font-semibold"
      >
        WORK WITH ME
      </Link>
    </nav>
  );
};

export default Navbar;
