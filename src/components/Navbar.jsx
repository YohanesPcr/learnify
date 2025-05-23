// ------ Navbar.jsx ------

import { NavLink } from 'react-router-dom';
import { Home, BookOpen, Phone, Info } from 'lucide-react';

// Fungsi untuk styling NavLink
const menuClass = ({ isActive }) =>
  `hover:text-[#00B074] cursor-pointer ${
    isActive ? 'text-[#00B074] font-semibold' : 'text-gray-700'
  }`;

export default function Navbar() {
  return (
    <nav
      id="navbar"
      className="bg-white shadow-sm py-4 px-8 flex justify-between items-center sticky top-0 z-50"
    >
      <div id="navbar-logo" className="flex items-center space-x-2">
        <img
          src="\img\logo\learnifyLogo.png"
          alt="Logo"
          className="h-auto max-h-[2.25rem]"
          id="logo-image"
        />
        <h1 id="brand-name" className="text-2xl font-bold text-[#00B074]">
          Learnify
        </h1>
      </div>

      {/* Menu navigasi */}
      <ul id="navbar-menu" className="hidden md:flex space-x-6 font-medium">
      <li id="menu-free-learning">
  <NavLink to="/" className={menuClass}>
    Free Learning
  </NavLink>
</li>

        <li id="menu-blog">
          <NavLink to="/blog" className={menuClass}>Blog</NavLink>
        </li>
        <li id="menu-college">
         <NavLink to="/401" className={menuClass}>My Learning</NavLink>
        </li>
        <li id="menu-jobs">
          <NavLink to="/403" className={menuClass}>Jobs</NavLink>
        </li>
        <li id="menu-contact">
          <NavLink to="/faq" className={menuClass}>Faq</NavLink>
        </li>
        <li id="menu-about">
          <NavLink to="/mentor" className={menuClass}>Mentor</NavLink>
        </li>
      </ul>

      {/* Tombol Login dan Register */}
      <div id="navbar-buttons" className="space-x-3">
        <button
          id="btn-login"
          className="px-4 py-1 border border-[#00B074] text-[#00B074] rounded-md transition-all duration-200 hover:bg-green-600 hover:text-white active:bg-green-800"
        >
          Login
        </button>
        <button
          id="btn-register"
          className="bg-[#00B074] text-white px-4 py-1 rounded-md transition-all duration-200 hover:bg-green-600 active:bg-green-800"
        >
          Register
        </button>
      </div>
    </nav>
  );
}
