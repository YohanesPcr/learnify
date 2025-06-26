import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const API_URL =
  "https://znsvlpicrvbgxicnzrda.supabase.co/rest/v1/instructors";
const API_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inpuc3ZscGljcnZiZ3hpY256cmRhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk2MTQzMzAsImV4cCI6MjA2NTE5MDMzMH0.3p4-awE53GsuXdMefxqnuIAqOYN2K7S3UHDWuD2E1Fc";

const headers = {
  apikey: API_KEY,
  Authorization: `Bearer ${API_KEY}`,
};

export default function InstructorDetail() {
  const { id } = useParams();
  const [instructor, setInstructor] = useState(null);

  useEffect(() => {
    const fetchInstructor = async () => {
      try {
        const res = await axios.get(`${API_URL}?id=eq.${id}&select=*`, {
          headers,
        });
        if (res.data.length > 0) {
          setInstructor(res.data[0]);
        }
      } catch (err) {
        console.error("Gagal mengambil data instruktur:", err);
      }
    };

    window.scrollTo(0, 0);
    fetchInstructor();
  }, [id]);

  if (!instructor)
    return <div className="p-6 text-center">Instruktur tidak ditemukan.</div>;

  return (
    <div className="min-h-screen bg-white text-[#043334] p-8">
      <div className="max-w-4xl mx-auto bg-[#DFF5F2] rounded-xl shadow-lg p-6 flex flex-col md:flex-row gap-6">
        <img
          src={instructor.profile_image}
          alt={instructor.name}
          className="w-full md:w-1/2 h-64 object-cover rounded-lg"
        />
        <div className="flex flex-col justify-center md:w-1/2">
          <h2 className="text-3xl font-bold">{instructor.name}</h2>
          <div className="mt-2 text-sm text-gray-700">
            ⭐ {instructor.rating} — {instructor.reviews} reviews
          </div>

          {instructor.achievement && (
            <p className="mt-4 text-gray-800 text-sm leading-relaxed">
              <strong>Prestasi:</strong> {instructor.achievement}
            </p>
          )}

          {instructor.expertise && instructor.expertise.length > 0 && (
            <p className="mt-2 text-sm text-gray-700">
              <strong>Keahlian:</strong> {instructor.expertise.join(", ")}
            </p>
          )}

          {instructor.certificate && instructor.certificate.length > 0 && (
            <p className="mt-2 text-sm text-gray-700">
              <strong>Sertifikat:</strong> {instructor.certificate.join(", ")}
            </p>
          )}

          <button className="mt-6 bg-[#043334] text-white py-2 px-4 rounded-md hover:bg-[#065f5f]">
            Daftar Sekarang
          </button>
        </div>
      </div>
    </div>
  );
}
