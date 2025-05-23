// File: main.jsx
import { createRoot } from "react-dom/client";
import './assets/tailwind.css';

import Navbar from "./layouts/Navbar";
import HeroSection from "./pages/HeroSection";
import Features from "./pages/Features";
import Footer from "./layouts/Footer";
import PageHeader from "./components/PageHeader";
import PopularCategories from "./pages/PopularCategories";

createRoot(document.getElementById("root"))
  .render(
    <div id="guest-theme" className="flex flex-col min-h-screen font-sans bg-white text-gray-800">
      <Navbar />
      <PageHeader title="Learnify" subtitle="Empowering Your Learning Journey" />
      <HeroSection />
      <Features />
      <PopularCategories/>
      <Footer />
    </div>
  );