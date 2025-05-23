// ✅ UserForm.jsx - Komponen Formulir Pengguna

// ✅ Mengimpor komponen InputField, BorderUserForm, dan ButtonUserForm dari folder components
import InputField from "./components/InputField";
import BorderUserForm from "./components/BorderUserForm";
import ButtonUserForm from "./components/ButtonUserForm";

// ✅ Komponen utama untuk formulir pengguna
export default function UserForm() {
  return (
    // ✅ Menggunakan komponen BorderUserForm untuk memberi tampilan border pada form
    <BorderUserForm>
      {/* ✅ Input untuk Nama, bertipe text */}
      <InputField label="Nama" type="text" placeholder="ketik Nama..." />  

      {/* ✅ Input untuk Email, bertipe email */}
      <InputField label="Email" type="email" placeholder="ketik Email..." />  

      {/* ✅ Input untuk Tanggal Lahir, bertipe date */}
      <InputField label="Tanggal Lahir" type="date" />  

      {/* ✅ Tombol Simpan, saat diklik akan menampilkan alert */}
      <ButtonUserForm label="Simpan" onClick={() => alert('Data disimpan!')} />
    </BorderUserForm>
  );
}
