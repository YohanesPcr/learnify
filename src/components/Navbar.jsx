import { NavLink } from 'react-router-dom';
import { Home, BookOpen, Phone, Info } from 'lucide-react';

const menuClass = ({ isActive }) =>
  `hover:text-[#00B074] cursor-pointer ${
    isActive ? 'text-[#00B074] font-semibold' : 'text-gray-700'
  }`;

export default function Navbar() {
  return (
    <nav id="navbar" className="bg-white shadow-sm py-4 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        <div id="navbar-logo" className="flex items-center space-x-2">
          <img
            src="/img/logo/logoh.png"
            alt="Logo"
            className="h-auto max-h-[3.25rem]"
            id="logo-image"
          />
        </div>

        <ul id="navbar-menu" className="hidden md:flex space-x-6 font-medium">
          <li><NavLink to="/" className={menuClass}>Menu</NavLink></li>
          <li><NavLink to="/courses" className={menuClass}>Courses</NavLink></li>
          <li><NavLink to="/my-learning" className={menuClass}>My Learning</NavLink></li>
          <li><NavLink to="/instuctor" className={menuClass}>Instuctor</NavLink></li>
          <li><NavLink to="/blog" className={menuClass}>Blog</NavLink></li>
          <li><NavLink to="/contact" className={menuClass}>Contact Us</NavLink></li>
           <li><NavLink to="/feedback" className={menuClass}>Feedback</NavLink></li>
          <li><NavLink to="/faq" className={menuClass}>Faq</NavLink></li>
        </ul>

        <div id="navbar-buttons" className="space-x-3">
          <NavLink to="/login">
            <button className="px-4 py-1 border border-[#037668] text-[#037668] rounded-md transition-all duration-200 hover:bg-green-600 hover:text-white active:bg-green-800">
              Login
            </button>
          </NavLink>
          <NavLink to="/register">
            <button className="bg-[#037668] text-white px-4 py-1 rounded-md transition-all duration-200 hover:bg-green-600 active:bg-green-800">
              Register
            </button>
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
