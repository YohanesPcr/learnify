// layouts/MainLayout.js

// Import React untuk mendukung penggunaan JSX dan komponen React
import React from "react";

// Import Outlet dari react-router-dom, digunakan untuk merender komponen sesuai rute saat ini
import { Outlet } from "react-router-dom";

// Import komponen Navbar dan Footer yang akan ditampilkan di layout utama
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// Komponen MainLayout merupakan layout utama yang membungkus halaman dengan navbar di atas dan footer di bawah
export default function MainLayout() {
  return (
    // Wrapper utama layout dengan pengaturan flex column agar navbar di atas, konten di tengah, dan footer di bawah
    <div className="flex flex-col min-h-screen font-sans bg-white text-gray-800">
      
      {/* Komponen Navbar selalu ditampilkan di bagian atas */}
      <Navbar />
      
      {/* Outlet digunakan untuk menampilkan konten halaman yang sesuai dengan rute yang sedang diakses */}
      <main className="flex-grow">
        <Outlet />
      </main>
      
      {/* Komponen Footer selalu ditampilkan di bagian bawah */}
      <Footer />
    </div>
  );
}
