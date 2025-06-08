import { useParams } from "react-router-dom";
import mentors from "../json/mentors.json";
import { useEffect } from "react"; // tambahkan ini

export default function MentorDetail() {
  const { id } = useParams();
  const mentor = mentors.find((m) => m.id === parseInt(id));

  
  if (!mentor) return <div className="p-6 text-center">Mentor tidak ditemukan.</div>;
useEffect(() => {
  window.scrollTo(0, 0);
}, []);

  return (
    <div className="min-h-screen bg-white text-[#043334] p-8">
      <div className="max-w-4xl mx-auto bg-[#DFF5F2] rounded-xl shadow-lg p-6 flex flex-col md:flex-row gap-6">
        <img
          src={mentor.image}
          alt={mentor.name}
          className="w-full md:w-1/2 h-64 object-cover rounded-lg"
        />
        <div className="flex flex-col justify-center md:w-1/2">
          <h2 className="text-3xl font-bold">{mentor.name}</h2>
          <p className="text-lg mt-2">{mentor.position}</p>
          <div className="mt-2 text-sm text-gray-700">⭐ {mentor.rating} — {mentor.reviews}</div>

          {mentor.location && (
            <p className="mt-2 text-sm text-gray-600">
              📍 <span className="font-medium">{mentor.location}</span>
            </p>
          )}

          {mentor.bio && (
            <p className="mt-4 text-gray-800 text-sm leading-relaxed">
              {mentor.bio}
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
