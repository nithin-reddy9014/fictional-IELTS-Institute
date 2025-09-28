import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white shadow fixed w-full z-10">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-indigo-600">
          IELTSPro
        </Link>

        {/* Menu Links */}
        <div className="space-x-6">
          <Link to="/" className="hover:text-indigo-600">
            Home
          </Link>
          <Link to="/about" className="hover:text-indigo-600">
            About
          </Link>
          <a href="/courses" className="hover:text-indigo-600">
            Courses
          </a>
          <a href="#contact" className="hover:text-indigo-600">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
