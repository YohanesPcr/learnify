// File: src/pages/LandingPage.jsx
import React from 'react';
import { Navbar } from "../layouts/Navbar";
import { Hero } from "./HeroSection";
import { Feature } from "./Features";
import { Footer } from "../layouts/Footer";

export default function LandingPage() {
  return (
    <div className="font-sans bg-white text-gray-900">
      <Navbar />
      <Hero />
      <Feature />
      <Footer />
    </div>
  );
}