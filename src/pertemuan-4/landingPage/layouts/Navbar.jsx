// File: layouts/Navbar.jsx
import { Home, BookOpen, Phone, Info } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-white shadow py-4 px-6 flex justify-between items-center sticky top-0 z-50">
      <h1 className="text-2xl font-bold text-blue-600">Learnify</h1>
      <ul className="flex space-x-6 text-gray-700 font-medium">
        <li className="flex items-center space-x-1 hover:text-blue-600 cursor-pointer"><Home size={18}/> <span>Home</span></li>
        <li className="flex items-center space-x-1 hover:text-blue-600 cursor-pointer"><BookOpen size={18}/> <span>Courses</span></li>
        <li className="flex items-center space-x-1 hover:text-blue-600 cursor-pointer"><Info size={18}/> <span>About</span></li>
        <li className="flex items-center space-x-1 hover:text-blue-600 cursor-pointer"><Phone size={18}/> <span>Contact</span></li>
      </ul>
    </nav>
  );
}
