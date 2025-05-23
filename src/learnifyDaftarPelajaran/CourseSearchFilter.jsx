import React, { useState } from "react";
import courseData from "./courses.json";

export default function CourseSearchFilter() {
  // State untuk menyimpan input pencarian, filter tag, dan level
  const [dataForm, setDataForm] = useState({
    searchTerm: "",
    selectedTag: "",
    selectedLevel: "",
  });

  // Fungsi untuk menangani perubahan input pada search atau filter
  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setDataForm({
      ...dataForm,
      [name]: value,
    });
  };

  // Filter kursus berdasarkan input pencarian, tag, dan level
  const filteredCourses = courseData.filter((course) => {
    // Pencarian berdasarkan nama atau deskripsi
    const matchesSearch =
      course.name.toLowerCase().includes(dataForm.searchTerm.toLowerCase()) ||
      course.description.toLowerCase().includes(dataForm.searchTerm.toLowerCase());

    // Filter tag: jika dipilih, cek apakah tag kursus mengandung tag tersebut
    const matchesTag = dataForm.selectedTag
      ? course.tags.includes(dataForm.selectedTag)
      : true;

    // Filter level: jika dipilih, cocokkan dengan level kursus
    const matchesLevel = dataForm.selectedLevel
      ? course.details.level === dataForm.selectedLevel
      : true;

    // Kursus hanya ditampilkan jika cocok semua filter
    return matchesSearch && matchesTag && matchesLevel;
  });

  // Mengambil semua tag unik dari data kursus
  const allTags = [...new Set(courseData.flatMap((course) => course.tags))];

  // Daftar level yang tersedia
  const levels = ["Beginner", "Intermediate", "Advanced"];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-100 p-6">
      <h1 className="text-3xl font-bold mb-6 text-center text-indigo-800">
        🎓 Daftar Mata Pelajaran/Kursus
      </h1>

      {/* Input pencarian */}
      <input
        type="text"
        name="searchTerm"
        placeholder="🔍 Cari kursus..."
        className="mb-4 p-3 border border-gray-300 rounded-xl w-full focus:outline-none focus:ring-2 focus:ring-indigo-400"
        value={dataForm.searchTerm}
        onChange={handleChange}
      />

      {/* Dropdown filter tag */}
      <select
        name="selectedTag"
        className="mb-4 p-3 border border-gray-300 rounded-xl w-full focus:outline-none focus:ring-2 focus:ring-indigo-400"
        value={dataForm.selectedTag}
        onChange={handleChange}
      >
        <option value="">📌 Semua Tag</option>
        {allTags.map((tag, index) => (
          <option key={index} value={tag}>
            {tag}
          </option>
        ))}
      </select>

      {/* Dropdown filter level */}
      <select
        name="selectedLevel"
        className="mb-6 p-3 border border-gray-300 rounded-xl w-full focus:outline-none focus:ring-2 focus:ring-indigo-400"
        value={dataForm.selectedLevel}
        onChange={handleChange}
      >
        <option value="">📚 Semua Level</option>
        {levels.map((level, index) => (
          <option key={index} value={level}>
            {level}
          </option>
        ))}
      </select>

      {/* Grid untuk menampilkan kursus */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredCourses.map((course) => (
          <div
            key={course.id}
            className="bg-white p-5 rounded-2xl shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105"
          >
            {/* Gambar kursus */}
            <img
              src={course.image}
              alt={course.name}
              className="w-full h-48 object-cover rounded-xl mb-3"
            />
            {/* Informasi kursus */}
            <h2 className="text-xl font-semibold text-indigo-800">{course.name}</h2>
            <p className="text-gray-600 mb-2">{course.description}</p>
            <p className="text-sm text-gray-500">👨‍🏫 Instruktur: {course.details.instructor}</p>
            <p className="text-sm text-gray-500">⏱️ Durasi: {course.details.duration}</p>
            <p className="text-sm text-gray-500">📚 Level: {course.details.level}</p>
          </div>
        ))}

        {/* Tampilkan pesan jika tidak ada hasil ditemukan */}
        {filteredCourses.length === 0 && (
          <p className="text-center text-gray-500 col-span-full text-lg mt-10">
            😥 Tidak ada kursus ditemukan.
          </p>
        )}
      </div>
    </div>
  );
}
