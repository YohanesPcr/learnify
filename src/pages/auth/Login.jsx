// Mengimpor React dan useState untuk state lokal
import React, { useState } from "react";

// Mengimpor ikon dari react-icons untuk tampilan visual
import { BsFillExclamationDiamondFill } from "react-icons/bs";
import { ImSpinner2 } from "react-icons/im";
import { AiOutlineEyeInvisible } from "react-icons/ai";

// useNavigate digunakan untuk redirect setelah login
import { useNavigate } from "react-router-dom";

// Menggunakan axios untuk HTTP request
import axios from "axios";

// Komponen Login utama
export default function Login() {
  const navigate = useNavigate(); // analisa: digunakan untuk navigasi ke halaman lain setelah login berhasil
  const [loading, setLoading] = useState(false); // analisa: menandakan proses login sedang berlangsung
  const [error, setError] = useState(""); // analisa: menyimpan pesan error saat login gagal
  const [dataForm, setDataForm] = useState({ email: "", password: "" }); // analisa: menyimpan nilai input form login
  const [rememberMe, setRememberMe] = useState(true); // analisa: kontrol untuk checkbox 'Remember me'
  const [showPassword] = useState(false); // analisa: fitur untuk toggle tampil/sembunyi password (belum diimplementasikan)

  // Fungsi untuk mengupdate nilai form ketika user mengetik
  const handleChange = (e) => {
    const { name, value } = e.target;
    setDataForm({ ...dataForm, [name]: value }); // analisa: menyimpan data form berdasarkan nama input
  };

  // Fungsi submit login
  const handleSubmit = async (e) => {
    e.preventDefault(); // analisa: mencegah reload halaman saat form disubmit
    setLoading(true); // analisa: menampilkan spinner saat proses login
    setError(""); // analisa: reset pesan error

    // Mengirim data login ke dummy API
    axios
      .post("https://dummyjson.com/user/login", {
        username: dataForm.email, // analisa: email disamakan dengan username API
        password: dataForm.password,
      })
      .then((res) => {
        if (res.status !== 200) {
          setError(res.data.message); // analisa: jika status tidak 200, tampilkan error
          return;
        }
        navigate("/"); // analisa: jika login sukses, redirect ke halaman utama
      })
      .catch((err) => {
        setError(err.response?.data?.message || "Login gagal"); // analisa: tampilkan pesan error dari server atau fallback
      })
      .finally(() => setLoading(false)); // analisa: selalu matikan loading setelah proses selesai
  };

  const isDisabled = !dataForm.email || !dataForm.password; // analisa: tombol login hanya aktif jika email dan password diisi

  return (
    <>
      <h2 className="text-2xl font-semibold text-gray-900 mb-6">Sign in</h2>

      {/* Tampilkan error jika ada */}
      {error && (
        <div className="bg-red-100 text-red-700 p-3 mb-4 rounded flex items-center text-sm">
          <BsFillExclamationDiamondFill className="me-2" />
          {error}
        </div>
      )}

      {/* Tampilkan loading saat proses login */}
      {loading && (
        <div className="bg-gray-100 p-3 mb-4 rounded text-sm flex items-center">
          <ImSpinner2 className="me-2 animate-spin" />
          Mohon tunggu...
        </div>
      )}

      {/* Form login */}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <input
            type="text"
            name="email"
            placeholder="Email or phone number"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-black/20"
            onChange={handleChange} // analisa: update state ketika input berubah
          />
        </div>

        <div className="mb-4 relative">
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-black/20"
            onChange={handleChange}
          />
          {/* Ikon untuk toggle password, tapi belum berfungsi */}
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm select-none flex items-center gap-1 cursor-pointer">
            <AiOutlineEyeInvisible size={16} /> Hide
          </span>
        </div>

        {/* Tombol login */}
        <button
          type="submit"
          disabled={isDisabled} // analisa: tombol disabled jika form kosong
          className={`w-full py-2 mt-2 rounded-full font-medium transition duration-200 text-white ${
            isDisabled
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-gray-700 hover:bg-gray-800"
          }`}
        >
          Sign in
        </button>

        {/* Checkbox 'Remember me' dan link bantuan */}
        <div className="flex justify-between items-center mt-4 text-sm">
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={() => setRememberMe(!rememberMe)} // analisa: toggle checkbox
              className="mr-2"
            />
            Remember me
          </label>
          <a href="#" className="text-gray-600 hover:underline">
            Need help?
          </a>
        </div>
      </form>

      {/* Link ke halaman sign up */}
      <div className="mt-6 text-sm text-center text-gray-700">
        Don’t have an account?{" "}
        <a href="#" className="text-black underline">
          Sign up
        </a>
      </div>

      {/* Informasi keamanan */}
      <p className="text-xs text-gray-400 mt-3 text-center">
        This page is protected by Google reCAPTCHA to ensure you’re not a bot.{" "}
        <a href="#" className="underline">
          Learn more.
        </a>
      </p>
    </>
  );
}
