import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { BsFillExclamationDiamondFill } from "react-icons/bs";
import { ImSpinner2 } from "react-icons/im";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import axios from "axios";

const API_URL = "https://znsvlpicrvbgxicnzrda.supabase.co/rest/v1/students";
const API_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inpuc3ZscGljcnZiZ3hpY256cmRhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk2MTQzMzAsImV4cCI6MjA2NTE5MDMzMH0.3p4-awE53GsuXdMefxqnuIAqOYN2K7S3UHDWuD2E1Fc";

const headers = {
  apikey: API_KEY,
  Authorization: `Bearer ${API_KEY}`,
};

export default function Login() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [dataForm, setDataForm] = useState({ email: "", password: "" });
  const [rememberMe, setRememberMe] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDataForm({ ...dataForm, [name]: value });
  };

  const validatePassword = (password) => {
    return /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    if (!validatePassword(dataForm.password)) {
      setError("Password minimal 8 karakter dan harus mengandung huruf serta angka.");
      setLoading(false);
      return;
    }

    try {
      const res = await axios.get(
        `${API_URL}?email=eq.${dataForm.email}&select=*`,
        { headers }
      );
      const user = res.data[0];

      if (!user) {
        setError("Email tidak ditemukan.");
      } else if (user.password !== dataForm.password) {
        setError("Password salah.");
      } else {
        // Simpan session lokal (opsional)
        localStorage.setItem("user", JSON.stringify(user));
        navigate("/");
      }
    } catch (err) {
      setError("Terjadi kesalahan saat login. Silakan coba lagi.");
    } finally {
      setLoading(false);
    }
  };

  const isDisabled = !dataForm.email || !dataForm.password;

  return (
    <>
      <h2 className="text-2xl font-semibold text-gray-900 mb-6">Masuk Akun</h2>

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

        <button
          type="submit"
          disabled={isDisabled}
          className={`w-full py-2 mt-2 rounded-full font-medium transition duration-200 text-white ${
            isDisabled
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-[#043334] hover:bg-[#065f5f]"
          }`}
        >
          Masuk
        </button>

        <div className="flex justify-between items-center mt-4 text-sm">
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={() => setRememberMe(!rememberMe)}
              className="mr-2"
            />
            Ingat saya
          </label>
          <a href="#" className="text-gray-600 hover:underline">
            Butuh bantuan?
          </a>
        </div>
      </form>

      <div className="mt-6 text-sm text-center text-gray-700">
        Belum punya akun?{" "}
        <Link to="/register" className="text-black underline">
          Daftar
        </Link>
      </div>

      <p className="text-xs text-gray-400 mt-3 text-center">
        Halaman ini dilindungi oleh reCAPTCHA untuk memastikan Anda bukan bot.
      </p>
    </>
  );
}
