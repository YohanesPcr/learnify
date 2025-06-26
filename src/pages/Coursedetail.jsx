import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

const API_URL = "https://znsvlpicrvbgxicnzrda.supabase.co/rest/v1/courses";
const API_KEY =  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inpuc3ZscGljcnZiZ3hpY256cmRhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk2MTQzMzAsImV4cCI6MjA2NTE5MDMzMH0.3p4-awE53GsuXdMefxqnuIAqOYN2K7S3UHDWuD2E1Fc";
 // Gunakan API KEY kamu

const headers = {
  apikey: API_KEY,
  Authorization: `Bearer ${API_KEY}`,
};

export default function CourseDetail() {
  const { title } = useParams();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);

    const fetchCourse = async () => {
      try {
        const response = await axios.get(`${API_URL}?slug=eq.${title}`, {
          headers,
        });

        if (response.data.length > 0) {
          setCourse(response.data[0]);
        } else {
          setCourse(null);
        }
      } catch (error) {
        console.error("Gagal ambil detail course:", error);
        setCourse(null);
      } finally {
        setLoading(false);
      }
    };

    fetchCourse();
  }, [title]);

  if (loading) {
    return <div className="p-10 text-center text-gray-500 text-lg">Loading...</div>;
  }

  if (!course) {
    return <div className="p-10 text-center text-red-500 text-xl">Course not found</div>;
  }

  return (
    <section className="py-16 px-6 max-w-5xl mx-auto">
      <div className="grid md:grid-cols-2 gap-8 items-start">
        {/* Gambar */}
        <div>
          <img
            src={course.image}
            alt={course.title}
            className="w-full h-72 object-cover rounded-xl shadow-lg"
          />
        </div>

        {/* Informasi */}
        <div className="space-y-4">
          <h1 className="text-4xl font-bold text-[#004C3F]">{course.title}</h1>
          <p className="text-gray-700 text-base">{course.description}</p>

          <div className="border-t pt-4 space-y-2">
            <p>
              <span className="font-semibold text-gray-800">Instructor:</span> {course.instructor}
            </p>
            <p>
              <span className="font-semibold text-gray-800">Duration:</span> {course.duration}
            </p>
            <p>
              <span className="font-semibold text-gray-800">Level:</span> {course.level}
            </p>
            <p>
              <span className="font-semibold text-gray-800">Paket:</span> {course.packagetype}
            </p>
            <p>
              <span className="font-semibold text-gray-800">Harga:</span> {course.price}
            </p>
          </div>

          <Link to={`/register/${course.slug}`}>
            <button className="mt-6 bg-[#00B074] hover:bg-[#007f61] text-white font-medium py-2 px-6 rounded-lg shadow">
              Daftar Sekarang
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
