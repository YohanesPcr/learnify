import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import mentorsData from "../json/mentors.json";
import PageHeader from "../components/PageHeader";

export default function MentorList() {
  const [mentors, setMentors] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("");

  // Ambil data dari JSON lokal
  useEffect(() => {
    setMentors(mentorsData);
  }, []);

  const filteredMentors = mentors.filter((mentor) => {
    const matchSearch = mentor.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchCategory = category ? mentor.position === category : true;
    return matchSearch && matchCategory;
  });

  const uniqueCategories = [...new Set(mentors.map((m) => m.position))];

  return (
    <div className="bg-[#ffffff] text-[#043334] font-sans min-h-screen">
      <PageHeader subtitle="Teachers" title="Meet the teacher" />

      {/* SEARCH & FILTER */}
      <div className="max-w-6xl mx-auto px-6 mt-6 flex flex-col md:flex-row gap-4 justify-between">
        <input
          type="text"
          placeholder="Search by name..."
          className="border p-2 rounded-md w-full md:w-1/2"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select
          className="border p-2 rounded-md w-full md:w-1/4"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">All Categories</option>
          {uniqueCategories.map((cat, i) => (
            <option key={i} value={cat}>{cat}</option>
          ))}
        </select>
      </div>

      {/* KARTU MENTOR */}
      <div className="max-w-6xl mx-auto px-6 mt-12 grid gap-6 md:grid-cols-3 lg:grid-cols-4">
        {filteredMentors.map((mentor) => (
          <Link to={`/mentor/${mentor.id}`} key={mentor.id}>
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
              <img
                src={mentor.image}
                alt={mentor.name}
                className="w-full h-60 object-cover"
              />
              <div className="p-4 text-center bg-[#DFF5F2]">
                <h3 className="font-bold text-lg">{mentor.name}</h3>
                <p className="text-sm text-gray-600">{mentor.position}</p>
                <div className="mt-2 flex justify-center items-center text-sm text-gray-600 gap-2">
                  <span>⭐ {mentor.rating}</span>
                  <span>({mentor.reviews})</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
