// ------ main.jsx ------

import { createRoot } from "react-dom/client";
// Import file Tailwind CSS yang sudah disiapkan sebelumnya
import './assets/tailwind.css';

// Import komponen-komponen yang diperlukan untuk halaman Guest Theme
import Navbar from "./layouts/Navbar"; 
import HeroSection from "./pages/HeroSection"; 
import Footer from "./layouts/Footer"; 
import Categories from "./components/Categories"; 
import Features from "./components/Features";

// Membuat root React dan merender komponen utama ke dalam elemen dengan id "root"
createRoot(document.getElementById("root")).render(
  <div id="guest-theme" className="flex flex-col min-h-screen font-sans bg-white text-gray-800">
    {/* Navbar: Menampilkan menu navigasi utama */}
    <Navbar />
    
 
    <HeroSection />

    <Features />
    

    <Categories />
    
    <Footer /> 
  </div>
);
