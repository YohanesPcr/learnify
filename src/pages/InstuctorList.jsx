import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import PageHeader from "../components/PageHeader";

const API_URL = "https://znsvlpicrvbgxicnzrda.supabase.co/rest/v1/instructors";
const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inpuc3ZscGljcnZiZ3hpY256cmRhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk2MTQzMzAsImV4cCI6MjA2NTE5MDMzMH0.3p4-awE53GsuXdMefxqnuIAqOYN2K7S3UHDWuD2E1Fc";

const headers = {
  apikey: API_KEY,
  Authorization: `Bearer ${API_KEY}`,
};

export default function InstructorsList() {
  const [instructors, setInstructors] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [expertiseFilter, setExpertiseFilter] = useState("");

useEffect(() => {
  const fetchInstructors = async () => {
    try {
      const res = await axios.get(
        "https://znsvlpicrvbgxicnzrda.supabase.co/rest/v1/instructors?select=*",
        { headers }
      );
      setInstructors(res.data);
    } catch (error) {
      console.error("Gagal mengambil data instruktur:", error);
    }
  };

  fetchInstructors();
}, []);


  const filteredInstructors = instructors.filter((ins) => {
    const nameMatch = ins.name.toLowerCase().includes(searchTerm.toLowerCase());
    const expertiseMatch = expertiseFilter
      ? ins.expertise?.includes(expertiseFilter)
      : true;
    return nameMatch && expertiseMatch;
  });

  const allExpertise = Array.from(
    new Set(instructors.flatMap((ins) => ins.expertise || []))
  );

  return (
    <div className="bg-white text-[#043334] font-sans min-h-screen">
      <PageHeader subtitle="Teachers" title="Meet the Instructors" />

      {/* SEARCH & FILTER */}
      <div className="max-w-6xl mx-auto px-6 mt-6 flex flex-col md:flex-row gap-4 justify-between">
        <input
          type="text"
          placeholder="Search by name..."
          className="input input-success w-full md:w-1/2"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <select
          className="select select-success w-full md:w-1/4"
          value={expertiseFilter}
          onChange={(e) => setExpertiseFilter(e.target.value)}
        >
          <option value="">All Expertise</option>
          {allExpertise.map((exp, i) => (
            <option key={i} value={exp}>{exp}</option>
          ))}
        </select>
      </div>

      {/* KARTU INSTRUKTUR */}
      <div className="max-w-6xl mx-auto px-6 mt-12 grid gap-6 md:grid-cols-3 lg:grid-cols-4">
        {filteredInstructors.map((ins) => (
          <Link to={`/instuctor/${ins.id}`} key={ins.id}>
            <div className="card bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition">
              <figure className="h-60 overflow-hidden">
                <img
                  src={ins.profile_image || "/placeholder.jpg"}
                  alt={ins.name}
                  className="w-full h-full object-cover"
                />
              </figure>
              <div className="card-body bg-[#DFF5F2] text-center px-4 py-3">
                <h3 className="font-bold text-lg">{ins.name}</h3>
                <p className="text-sm text-gray-600">
                  {ins.expertise?.join(", ")}
                </p>
                <div className="mt-2 flex justify-center items-center text-sm text-gray-600 gap-2">
                  <span>⭐ {ins.rating?.toFixed(1) || 0}</span>
                  <span>({ins.reviews || 0})</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}