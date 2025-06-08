import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import courseData from '../json/courses.json';

export default function CourseDetail() {
  const { title } = useParams();
  const course = courseData.find((c) => c.slug === title);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
          <p className="text-gray-700 text-base">{course.desc}</p>

          <div className="border-t pt-4 space-y-2">
            <p><span className="font-semibold text-gray-800">Instructor:</span> {course.instructor}</p>
            <p><span className="font-semibold text-gray-800">Duration:</span> {course.duration}</p>
            <p><span className="font-semibold text-gray-800">Level:</span> {course.level}</p>
          </div>

          <button className="mt-6 bg-[#00B074] hover:bg-[#007f61] text-white font-medium py-2 px-6 rounded-lg shadow">
            Daftar Sekarang
          </button>
        </div>
      </div>
    </section>
  );
}
