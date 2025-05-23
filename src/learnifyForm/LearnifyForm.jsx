// Import React Hook useState untuk mengelola state dalam komponen
import { useState } from "react";

// Import komponen reusable untuk membangun form
import InputField from "./components/InputField";
import Alert from "./components/Alert";
import Border from "./components/Border";
import Dropdown from "./components/Dropdown";

// Komponen utama LearnifyForm
export default function LearnifyForm() {
  // State untuk menyimpan nama, umur, password, dan status pendaftaran
  const [nama, setNama] = useState("");
  const [umur, setUmur] = useState("");
  const [password, setPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // Daftar umur yang tersedia dalam dropdown
  const umurOptions = ["6", "7", "8", "9", "10", "11", "12"];

  // Validasi nama: hanya huruf dan spasi yang diperbolehkan
  const isValidNama = /^[A-Za-z ]+$/.test(nama);
  const isNamaValid = nama.trim() !== "" && isValidNama;
  const isUmurValid = umur !== "";
  
  // Validasi password: tidak boleh ada huruf besar atau simbol
  const isValidPassword = /^[a-z0-9]+$/.test(password);
  const isPasswordValid = password.trim() !== "" && isValidPassword;
  
  const isFormValid = isNamaValid && isUmurValid && isPasswordValid;

  // Fungsi untuk menangani submit form
  const handleSubmit = () => {
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <Border>
      <h2 className="text-2xl font-semibold text-center mb-4 text-blue-700">
        Pendaftaran Murid Learnify
      </h2>
      
      {/* Input untuk nama murid */}
      <InputField
        label="Nama"
        type="text"
        placeholder="Masukkan nama"
        onChange={(e) => setNama(e.target.value)}
        value={nama}
      />
      {!isNamaValid && nama && (
        <Alert type="error" message="Nama harus diisi dan tidak boleh mengandung angka!" />
      )}
      
      {/* Dropdown untuk memilih umur */}
      <Dropdown
        label="Umur"
        options={umurOptions}
        onChange={(e) => setUmur(e.target.value)}
      />
      {!isUmurValid && umur === "" && (
        <Alert type="error" message="Silakan pilih umur!" />
      )}
      
      {/* Input untuk password */}
      <InputField
        label="Password"
        type="password"
        placeholder="Masukkan password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      {!isPasswordValid && password && (
        <Alert type="error" message="Password tidak boleh mengandung huruf besar atau simbol!" />
      )}
      
      {/* Tombol submit hanya muncul jika form valid */}
      {isFormValid && (
        <button 
          className="mt-4 w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          onClick={handleSubmit}
        >
          Daftar
        </button>
      )}
      
      {/* Alert sukses setelah submit */}
      {submitted && (
        <Alert type="success" message="Pendaftaran berhasil!" />
      )}
    </Border>
  );
}