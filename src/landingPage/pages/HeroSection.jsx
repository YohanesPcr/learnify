import { Users, BookOpen } from 'lucide-react';  // Mengimpor ikon dari lucide-react
import heroImage from '../assets/hero-student.png'; // Mengimpor gambar hero

export default function HeroSection() {
  return (
    <section id="hero-section" className="relative bg-gradient-to-r from-white via-[#f0fff8] to-[#d6f4eb] overflow-hidden">
      <div id="hero-container" className="px-8 py-16 grid md:grid-cols-2 gap-8 items-center max-w-7xl mx-auto relative z-10">
        
        {/* Bagian kiri dengan teks */}
        <div id="hero-left">
          <p id="hero-subtitle" className="text-[#00B074] font-semibold mb-2">Start your favourite course</p>
          <h1 id="hero-title" className="text-4xl md:text-5xl font-bold text-gray-900 leading-snug">
            Now learnify from anywhere,<br />
            and build your <span className="text-[#00B074]">bright career.</span>
          </h1>
          <button id="hero-button" className="mt-6 bg-[#083b2e] text-white px-6 py-3 rounded-md shadow-md hover:bg-[#065c43] transition-all">
            Start Learnify
          </button>
        </div>

        {/* Bagian kanan dengan gambar dan badge */}
        <div id="hero-right" className="relative w-full flex justify-center">
          <img id="hero-image" src={heroImage} alt="Student" className="w-[280px] md:w-[350px] relative z-20" />

          {/* Dekorasi latar belakang */}
          <div id="hero-circle-1" className="absolute top-8 right-10 w-16 h-16 rounded-full bg-[#00B074] opacity-70 z-10" />
          <div id="hero-circle-2" className="absolute bottom-6 left-6 w-24 h-24 bg-[#00B074] opacity-10 rounded-full z-0" />

          {/* Badge jumlah kursus */}
          <div id="badge-courses" className="absolute top-4 right-6 bg-[#083b2e] text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg z-20">
            2435 Courses
          </div>

          {/* Badge jumlah siswa */}
          <div id="badge-students" className="absolute bottom-4 left-4 bg-white rounded-xl shadow-lg p-3 flex items-center space-x-3 z-20">
            <Users id="badge-students-icon" className="text-[#00B074]" />
            <div>
              <p id="badge-students-count" className="font-semibold text-sm">40K+</p>
              <p id="badge-students-text" className="text-xs text-gray-500">Students Enrolled</p>
            </div>
          </div>
        </div>
      </div>

      {/* Dekorasi SVG atau pola */}
      <div id="hero-svg-decoration" className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
        <svg id="hero-svg-top" className="absolute top-10 left-0 w-40 h-40 opacity-30" fill="none" viewBox="0 0 200 200">
          <path d="M0,100 Q50,0 100,100 T200,100" stroke="#00B074" strokeWidth="2" fill="none" />
        </svg>
        <svg id="hero-svg-bottom" className="absolute bottom-10 right-0 w-40 h-40 opacity-30" fill="none" viewBox="0 0 200 200">
          <path d="M0,100 Q50,200 100,100 T200,100" stroke="#00B074" strokeWidth="2" fill="none" />
        </svg>
      </div>
    </section>
  );
}
