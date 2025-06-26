import { useEffect, useState } from 'react';
import axios from 'axios';
import { Bell } from 'lucide-react';
import PageHeader from '../components/PageHeader';

const BASE_URL = "https://znsvlpicrvbgxicnzrda.supabase.co/rest/v1";
const API_KEY =  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inpuc3ZscGljcnZiZ3hpY256cmRhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk2MTQzMzAsImV4cCI6MjA2NTE5MDMzMH0.3p4-awE53GsuXdMefxqnuIAqOYN2K7S3UHDWuD2E1Fc";
 // Ganti jika kamu pakai .env

const headers = {
  apikey: API_KEY,
  Authorization: `Bearer ${API_KEY}`,
};

export default function MyLearning() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchMyCourses = async () => {
      try {
        // 1. Ambil data registrasi yang sudah diverifikasi
        const res = await axios.get(`${BASE_URL}/registrations?verifikasi=eq.terverifikasi`, { headers });
        const registrations = res.data;

        if (registrations.length === 0) {
          setCourses([]);
          return;
        }

        // 2. Ambil semua data course
        const courseRes = await axios.get(`${BASE_URL}/courses`, { headers });
        const courseData = courseRes.data;

        // 3. Gabungkan data berdasarkan course_slug
        const combined = registrations.map((reg) => {
          const course = courseData.find((c) => c.slug === reg.course_slug);
          if (!course) return null;
          return {
            ...reg,
            ...course,
          };
        }).filter(Boolean); // Hapus yang null

        setCourses(combined);
      } catch (err) {
        console.error("Gagal ambil data My Learning:", err.response?.data || err.message);
      }
    };

    fetchMyCourses();
  }, []);

  return (
        <div className="bg-[#ffffff] text-[#043334] font-sans">
            <PageHeader subtitle="My Learning" title="My Learning Page"/>  
    <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-[#2d2d2d] mb-8">My Learning</h2>

        {courses.length === 0 ? (
          <p className="text-gray-500">Belum ada kursus yang diverifikasi.</p>
        ) : (
          <div className="grid md:grid-cols-3 gap-6">
            {courses.map((course, i) => (
              <div key={i} className="card bg-base-100 shadow-sm border border-gray-200 relative">
                {(course.gmeet || course.zoomlink) && (
                  <div className="absolute top-2 right-2 bg-yellow-100 text-yellow-800 rounded-full p-1">
                    <Bell className="w-5 h-5" />
                  </div>
                )}
                <figure className="h-48 overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full object-cover"
                  />
                </figure>
                <div className="card-body">
                  <h4 className="text-[#00B074] font-semibold text-lg">{course.title}</h4>
                  <p className="text-sm text-[#004C3F] mb-1">Instructor: {course.instructor}</p>
                  <p className="text-sm text-gray-500 mb-2">Durasi: {course.duration}</p>

                  {course.gmeet && (
                    <a href={course.gmeet} target="_blank" className="text-blue-600 text-sm block">
                      Link GMeet
                    </a>
                  )}
                  {course.zoomlink && (
                    <a href={course.zoomlink} target="_blank" className="text-blue-600 text-sm block">
                      Link Zoom
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
        </div>
  );
}
