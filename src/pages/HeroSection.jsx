import { useEffect, useState } from 'react';
import { Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import heroImage from '../assets/hero-student.png';
import Features from '../components/Features';
import Categories from '../components/Categories';
import studentsData from '../json/students_dataset.json';

const BASE_URL = "https://znsvlpicrvbgxicnzrda.supabase.co/rest/v1";
const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inpuc3ZscGljcnZiZ3hpY256cmRhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk2MTQzMzAsImV4cCI6MjA2NTE5MDMzMH0.3p4-awE53GsuXdMefxqnuIAqOYN2K7S3UHDWuD2E1Fc";

const headers = {
  apikey: API_KEY,
  Authorization: `Bearer ${API_KEY}`,
};

export default function HeroSection() {
  const [courseCount, setCourseCount] = useState(0);
  const [studentCount, setStudentCount] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/courses`, { headers });
        setCourseCount(res.data.length);
      } catch (err) {
        console.error("Gagal ambil jumlah courses:", err.message);
      }
    };

    const fetchStudents = () => {
      setStudentCount(studentsData.length);
    };

    fetchCourses();
    fetchStudents();
  }, []);

  return (
    <>
      <section className="relative bg-gradient-to-r from-white via-[#f0fff8] to-[#d6f4eb] overflow-hidden">
        <div className="px-6 py-16 grid md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto relative z-10">
          <div>
            <p className="text-[#00B074] font-semibold mb-2">Start your favourite course</p>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-snug">
              Now Learning from anywhere,<br />
              and build your <span className="text-[#00B074]">bright career.</span>
            </h1>
            <button
              className="mt-6 bg-[#083b2e] text-white px-6 py-3 rounded-md shadow-md hover:bg-[#065c43] transition-all"
              onClick={() => navigate("/courses")}
            >
              Start Learning
            </button>
          </div>

          <div className="relative w-full flex justify-center">
            <img src={heroImage} alt="Student" className="w-[280px] md:w-[350px] relative z-20" />
            <div className="absolute top-8 right-10 w-16 h-16 rounded-full bg-[#00B074] opacity-70 z-10" />
            <div className="absolute bottom-6 left-6 w-24 h-24 bg-[#00B074] opacity-10 rounded-full z-0" />
            <div className="absolute top-4 right-6 bg-[#083b2e] text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg z-20">
              {courseCount} Courses
            </div>
            <div className="absolute bottom-4 left-4 bg-white rounded-xl shadow-lg p-3 flex items-center space-x-3 z-20">
              <Users className="text-[#00B074]" />
              <div>
                <p className="font-semibold text-sm">{studentCount.toLocaleString()}+</p>
                <p className="text-xs text-gray-500">Students Enrolled</p>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
          <svg className="absolute top-10 left-0 w-40 h-40 opacity-30" fill="none" viewBox="0 0 200 200">
            <path d="M0,100 Q50,0 100,100 T200,100" stroke="#00B074" strokeWidth="2" fill="none" />
          </svg>
          <svg className="absolute bottom-10 right-0 w-40 h-40 opacity-30" fill="none" viewBox="0 0 200 200">
            <path d="M0,100 Q50,200 100,100 T200,100" stroke="#00B074" strokeWidth="2" fill="none" />
          </svg>
        </div>
      </section>

      <Features />
      <Categories />
    </>
  );
}
