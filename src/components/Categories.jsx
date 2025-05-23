'use client';
import { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';
import course from '../json/courses.json';

export default function Categories() {
  const [courseCards, setCourseCards] = useState([]);

  useEffect(() => {
    // langsung set datanya dari import
    setCourseCards(course);
  }, []);

  return (
    <section id="categories-section" className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header & Search */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
          <h2 className="text-2xl md:text-3xl font-bold text-[#2d2d2d]">
            Popular categories
          </h2>
          <div className="relative w-full md:w-80">
            <input
              type="text"
              placeholder="Search your Course"
              className="w-full border border-[#00B074] rounded-md py-2 px-4 pr-10 focus:outline-none"
            />
            <button className="absolute right-3 top-2.5 text-[#00B074]">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 103.6 3.6a7.5 7.5 0 0012.9 12.9z" />
              </svg>
            </button>
          </div>
        </div>

        {/* Category buttons */}
        <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-10">
          {['Design', 'Education', 'Craft', 'Marketing'].map((cat, i) => (
            <button key={i} className="bg-[#004C3F] text-white px-6 py-2 rounded-md text-sm font-medium hover:bg-[#006e59] transition">
              {cat}
            </button>
          ))}
        </div>

        {/* Course Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {courseCards.map((course, i) => (
            <div key={i} className="bg-white shadow-md rounded-xl overflow-hidden p-4">
              <img src={course.image} alt={course.title} className="rounded-lg w-full h-48 object-cover mb-4" />
              <h4 className="text-[#00B074] font-semibold mb-1">{course.title}</h4>
              <p className="text-sm text-gray-500 leading-relaxed mb-3">{course.desc}</p>
              <div className="flex justify-between items-center text-sm text-gray-600">
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>10 week</span>
                </div>
                <button className="bg-[#004C3F] text-white px-4 py-1 rounded-md hover:bg-[#006e59] transition">
                  View More
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Link */}
        <div className="text-right mt-6">
          <a href="#" className="text-sm text-[#004C3F] hover:underline">
            View All &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}
