import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { BsFillExclamationDiamondFill } from "react-icons/bs";
import { ImSpinner2 } from "react-icons/im";
import axios from "axios";

const API_URL = "https://znsvlpicrvbgxicnzrda.supabase.co/rest/v1/students";
const API_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inpuc3ZscGljcnZiZ3hpY256cmRhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk2MTQzMzAsImV4cCI6MjA2NTE5MDMzMH0.3p4-awE53GsuXdMefxqnuIAqOYN2K7S3UHDWuD2E1Fc";

const headers = {
  apikey: API_KEY,
  Authorization: `Bearer ${API_KEY}`,
};

export default function Register() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    full_name: "",
    email: "",
    password: "",
    confirmPassword: "",
    gender: "",
    school: "",
    major: "",
    grade: "",
    phone: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validatePassword = (password) => {
    return /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    if (form.password !== form.confirmPassword) {
      setError("Konfirmasi password tidak cocok.");
      setLoading(false);
      return;
    }

    if (!validatePassword(form.password)) {
      setError("Password minimal 8 karakter dan harus mengandung huruf serta angka.");
      setLoading(false);
      return;
    }

    try {
      const { confirmPassword, ...studentData } = form;
      const res = await axios.post(API_URL, studentData, { headers });
      if (res.status === 201 || res.status === 200) {
        alert("Pendaftaran berhasil!");
        navigate("/login");
      }
    } catch (err) {
      setError(err.response?.data?.message || "Gagal mendaftar. Coba lagi.");
    } finally {
      setLoading(false);
    }
  };

  const isDisabled =
    !form.full_name || !form.email || !form.password || !form.confirmPassword;

  return (
    <>
      <h2 className="text-2xl font-semibold text-gray-900 mb-6">Buat Akun</h2>

      {error && (
        <div className="bg-red-100 text-red-700 p-3 mb-4 rounded flex items-center text-sm">
          <BsFillExclamationDiamondFill className="me-2" />
          {error}
        </div>
      )}
      {loading && (
        <div className="bg-gray-100 p-3 mb-4 rounded text-sm flex items-center">
          <ImSpinner2 className="me-2 animate-spin" />
          Mohon tunggu...
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="full_name"
          placeholder="Nama Lengkap"
          className="input input-success w-full mb-3"
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="input input-success w-full mb-3"
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="input input-success w-full mb-3"
          onChange={handleChange}
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Konfirmasi Password"
          className="input input-success w-full mb-3"
          onChange={handleChange}
        />
        <input
          type="text"
          name="phone"
          placeholder="No. HP"
          className="input input-success w-full mb-3"
          onChange={handleChange}
        />
        <input
          type="text"
          name="school"
          placeholder="Asal Sekolah"
          className="input input-success w-full mb-3"
          onChange={handleChange}
        />
        <input
          type="text"
          name="major"
          placeholder="Jurusan"
          className="input input-success w-full mb-3"
          onChange={handleChange}
        />
        <input
          type="text"
          name="grade"
          placeholder="Kelas / Tingkat"
          className="input input-success w-full mb-3"
          onChange={handleChange}
        />
        <select
          name="gender"
          className="select select-success w-full mb-4"
          onChange={handleChange}
          defaultValue=""
        >
          <option disabled value="">
            Pilih Jenis Kelamin
          </option>
          <option value="Male">Laki-laki</option>
          <option value="Female">Perempuan</option>
        </select>

        <button
          type="submit"
          disabled={isDisabled}
          className={`w-full py-2 mt-2 rounded-full font-medium transition duration-200 text-white ${
            isDisabled
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-[#043334] hover:bg-[#065f5f]"
          }`}
        >
          Daftar
        </button>
      </form>

      <div className="mt-6 text-sm text-center text-gray-700">
        Sudah punya akun?{" "}
        <Link to="/login" className="text-black underline">
          Masuk di sini
        </Link>
      </div>
    </>
  );
}
