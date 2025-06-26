'use client';
import { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

const API_URL = "https://znsvlpicrvbgxicnzrda.supabase.co/rest/v1/courses";
const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inpuc3ZscGljcnZiZ3hpY256cmRhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk2MTQzMzAsImV4cCI6MjA2NTE5MDMzMH0.3p4-awE53GsuXdMefxqnuIAqOYN2K7S3UHDWuD2E1Fc";


const headers = {
  apikey: API_KEY,
  Authorization: `Bearer ${API_KEY}`,
};

export default function Categories() {
  const [courseCards, setCourseCards] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const navigate = useNavigate();

  // Paket Privat dihapus dari sini
  const categories = [
    "Paket Reguler",
    "Paket Intensif",
    "Paket Premium",
  ];

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get(API_URL, { headers });
        setCourseCards(response.data);
      } catch (error) {
        console.error("Failed to fetch courses from Supabase:", error.response?.data || error.message);
      }
    };
    fetchCourses();
  }, []);

  const filteredCourses = courseCards.filter((course) => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory
      ? course.packagetype === selectedCategory
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
              className="input input-success w-full pr-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Filter by packagetype */}
        <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-10">
          <button
            className={`px-6 py-2 rounded-md text-sm font-medium transition ${selectedCategory === '' ? 'bg-[#0D3934] text-white' : 'bg-[#00634B] text-white'}`}
            onClick={() => setSelectedCategory('')}
          >
            All Packages
          </button>
          {categories.map((cat, i) => (
            <button
              key={i}
              className={`px-6 py-2 rounded-md text-sm font-medium transition ${selectedCategory === cat ? 'bg-[#0D3934] text-white' : 'bg-[#00634B] text-white'}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Course Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {filteredCourses.slice(0, 6).map((course, i) => (
            <div key={i} className="card bg-base-100 shadow-sm border border-gray-200">
              <figure className="h-48 overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full object-cover"
                />
              </figure>
              <div className="card-body">
                <h4 className="text-[#00B074] font-semibold text-lg">{course.title}</h4>
                <p className="text-sm text-[#004C3F] font-semibold">{course.packagetype}</p>
                <p className="text-sm text-[#004C3F] font-bold mb-1">{course.price}</p>
                <p className="text-sm text-gray-500 leading-relaxed mb-3">{course.description}</p>
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
