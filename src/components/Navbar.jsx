import { useState } from "react";
import { Bars3Icon, XMarkIcon, UserIcon } from "@heroicons/react/24/outline";
import { Link, NavLink } from "react-router-dom";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Application", path: "/application" },
  { name: "Calendar", path: "/calendar" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img src="/logo.png" alt="Logo" className="h-10 w-10 mr-3" />
              <span className="text-lg font-semibold text-gray-800">Career Tracker</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <NavLink key={item.name} to={item.path} className={({ isActive }) => (isActive ? "text-gray-900" : "text-gray-600 hover:text-gray-900 transition-colors duration-200")}>
                {item.name}
              </NavLink>
            ))}
          </div>

          {/* Profile */}
          <div className="hidden md:flex space-x-4">
            <Link to="/profile">
              <UserIcon className="h-6 w-6 text-gray-700 hover:text-gray-900 transition-colors duration-200 cursor-pointer" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setOpen(!open)} className="md:hidden">
            {open ? <XMarkIcon className="h-6 w-6 text-gray-700" /> : <Bars3Icon className="h-6 w-6 text-gray-700" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden px-4 pb-3 space-y-1">
          {navItems.map((item) => (
            <Link key={item.name} to={item.path} className="block py-2 text-gray-700 hover:text-blue-500">
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
