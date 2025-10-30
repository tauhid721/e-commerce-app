import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { Menu, X, ShoppingCart, User, Sun, Moon } from "lucide-react";

const Navbar = ({ onSearch }) => {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (onSearch) onSearch(search); // parent এ search পাঠাবে
  };

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-red-500">
            TM <span className="text-orange-400">Shop</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
           <NavLink to="/" className={({ isActive }) => isActive ? "text-orange-400 font-semibold" : "hover:text-orange-300"}>Home</NavLink>
        <NavLink to="/menu" className={({ isActive }) => isActive ? "text-orange-400 font-semibold" : "hover:text-orange-300"}>Our Products</NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? "text-orange-400 font-semibold" : "hover:text-orange-300"}>About</NavLink>
        <NavLink to="/contact" className={({ isActive }) => isActive ? "text-orange-400 font-semibold" : "hover:text-orange-300"}>Contact</NavLink>
          </div>

          {/* Search Box */}
          <form
            onSubmit={handleSearch}
            className="hidden md:flex items-center border rounded-lg overflow-hidden"
          >
            <input
              type="text"
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="px-3 py-1 outline-none dark:bg-gray-800 dark:text-white"
            />
            <button
              type="submit"
              className="px-3 py-1 bg-red-500 text-white hover:bg-red-600"
            >
              Go
            </button>
          </form>

          {/* Icons */}
          <div className="flex items-center space-x-4">
            {/* Theme Toggle */}
            <button onClick={toggleTheme} className="p-2 rounded-full">
              {theme === "light" ? <Moon /> : <Sun />}
            </button>

            {/* Profile */}
            <Link to="/profile" className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800">
              <User />
            </Link>

            {/* Cart */}
            <Link to="/cart" className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800">
              <ShoppingCart />
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-md"
            >
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 px-4 pb-4 space-y-3">
          <Link to="/" className="block hover:text-red-500">
            Home
          </Link>
          <Link to="/menu" className="block hover:text-red-500">
            Menu
          </Link>
          <Link to="/about" className="block hover:text-red-500">
            About
          </Link>
          <Link to="/contact" className="block hover:text-red-500">
            Contact
          </Link>

          {/* Mobile Search */}
          <form onSubmit={handleSearch} className="flex items-center border rounded-lg overflow-hidden">
            <input
              type="text"
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="px-3 py-1 w-full outline-none dark:bg-gray-800 dark:text-white"
            />
            <button type="submit" className="px-3 py-1 bg-red-500 text-white">
              Go
            </button>
          </form>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
