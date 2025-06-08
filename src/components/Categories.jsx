'use client';
import { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';
import courseData from '../json/courses.json';

export default function Categories() {
  const [courseCards, setCourseCards] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    setCourseCards(courseData);
  }, []);

  const filteredCourses = courseCards.filter((course) => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory
      ? course.title.toLowerCase().includes(selectedCategory.toLowerCase())
      : true;
    return matchesSearch && matchesCategory;
  });

  return (
    <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
          <h2 className="text-2xl md:text-3xl font-bold text-[#2d2d2d]">
            Popular categories
          </h2>
          <div className="relative w-full md:w-80">
            <input
              type="text"
              placeholder="Search your Course"
              className="w-full border border-[#00B074] rounded-md py-2 px-4 pr-10 focus:outline-none"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Buttons for categories */}
        <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-10">
          {/* Button All Categories */}
          <button
            className={`px-6 py-2 rounded-md text-sm font-medium transition ${
              selectedCategory === '' ? 'bg-[#004C3F] text-white' : 'bg-gray-200 text-gray-700'
            }`}
            onClick={() => setSelectedCategory('')}
          >
            All Categories
          </button>

          {/* Other category buttons */}
          {['Design', 'Marketing', 'Development'].map((cat, i) => (
            <button
              key={i}
              className={`px-6 py-2 rounded-md text-sm font-medium transition ${
                selectedCategory === cat ? 'bg-[#004C3F] text-white' : 'bg-gray-200 text-gray-700'
              }`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Course cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {filteredCourses.map((course, i) => (
            <div key={i} className="bg-white shadow-md rounded-xl overflow-hidden p-4">
              <img
                src={course.image}
                alt={course.title}
                className="rounded-lg w-full h-48 object-cover mb-4"
              />
              <h4 className="text-[#00B074] font-semibold mb-1">{course.title}</h4>
              <p className="text-sm text-gray-500 leading-relaxed mb-3">{course.desc}</p>
              <div className="flex justify-between items-center text-sm text-gray-600">
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>{course.duration}</span>
                </div>
                <Link to={`/course/${course.slug}`}>
                  <button className="bg-[#004C3F] text-white px-4 py-1 rounded-md hover:bg-[#006e59] transition">
                    View More
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
