import { useState } from "react";
import InputField from "./components/InputField";
import Alert from "./components/Alert";
import Border from "./components/Border";
import DropdownMatkul from "./components/DropdownMatkul";

export default function SubjectSelectionForm() {
  const [nama, setNama] = useState("");

  const [subject, setSubject] = useState("");
  const [namaWali, setNamaWali] = useState("");
  const [success, setSuccess] = useState(false);

  const subjects = ["Matematika", "IPA", "Bahasa Inggris", "Sejarah", "Fisika", "Kimia"];

  // Validasi nama dan nama wali hanya boleh huruf dan spasi
  const isValidNama = nama === "" || /^[A-Za-z ]+$/.test(nama);
  const isValidNamaWali = namaWali === "" || /^[A-Za-z ]+$/.test(namaWali);

  const isNamaValid = nama.trim() !== "" && isValidNama;
  const isSubjectValid = subject !== "";
  const isNamaWaliValid = namaWali.trim() !== "" && isValidNamaWali;
  const isFormValid = isNamaValid && isSubjectValid && isNamaWaliValid;

  const handleSubmit = () => {
    setSuccess(true);
    setTimeout(() => setSuccess(false), 3000);
  };

  return (
    <Border>
      <h2 className="text-2xl font-semibold text-center mb-4 text-blue-700">
        Pemilihan Mata Pelajaran
      </h2>

      {/* Input Nama */}
      <InputField
        label="Nama"
        type="text"
        placeholder="Masukkan nama"
        onChange={(e) => setNama(e.target.value)}
        value={nama}
      />
      {!isNamaValid && nama && <Alert type="error" message="Nama harus diisi dan tidak boleh mengandung angka!" />}

   

      {/* Input Nama Wali */}
      <InputField
        label="Nama Wali"
        type="text"
        placeholder="Masukkan nama wali"
        onChange={(e) => setNamaWali(e.target.value)}
        value={namaWali}
      />
      {!isNamaWaliValid && namaWali && <Alert type="error" message="Nama wali harus diisi dan tidak boleh mengandung angka!" />}

      {/* Dropdown Mata Pelajaran */}
      <DropdownMatkul
        label="Mata Pelajaran"
        options={subjects}
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
      />
      {!isSubjectValid && <Alert type="error" message="Silakan pilih mata pelajaran!" />}

      {/* Tombol Submit */}
      {isFormValid && (
        <button onClick={handleSubmit} className="mt-4 w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
          Pilih
        </button>
      )}

      {/* Alert Sukses */}
      {success && <Alert type="success" message="Mata pelajaran berhasil dipilih!" />}
    </Border>
  );
}
